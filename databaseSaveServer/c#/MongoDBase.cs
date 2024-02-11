using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;

public class MongoDBase
{

    public MongoDBase(string connectionString, string databaseName)
    {
        var client = new MongoClient(connectionString);
        var database = client.GetDatabase(databaseName);
        m_models = database.GetCollection<Model>("model");
    }

    public void CreateModel(Model model)
    {
        m_models.InsertOne(model);
    }

    public List<Model> GetAllModels()
    {
        return m_models.Find(Builders<Model>.Filter.Empty).ToList();
    }

    public Model GetModelById(string id)
    {
        var filter = Builders<Model>.Filter.Eq("_id", ObjectId.Parse(id));
        return m_models.Find(filter).FirstOrDefault();
    }

    public void UpdateModel(string id, Model updatedModel)
    {
        var filter = Builders<Model>.Filter.Eq("_id", ObjectId.Parse(id));
        var update = Builders<Model>.Update
            .Set("modelName", updatedModel.modelName)
            .Set("modelFamilyName", updatedModel.modelFamilyName)
            .Set("maxRange", updatedModel.maxRange)
            .Set("spinSpeed", updatedModel.spinSpeed)
            .Set("frequency", updatedModel.frequency);

        m_models.UpdateOne(filter, update);
    }

    public void DeleteModel(string id)
    {
        var filter = Builders<Model>.Filter.Eq("_id", ObjectId.Parse(id));
        m_models.DeleteOne(filter);
    }

    
    public void DeleteAllModels()
    {
        var deleteFilter = Builders<Model>.Filter.Empty; // Filter to match all documents
        m_models.DeleteMany(deleteFilter);
    }


    private readonly IMongoCollection<Model> m_models;
} 