using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Model
{
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }


    public string modelName { get; set; }
    public string modelFamilyName { get; set; }
    public int maxRange { get; set; }
    public int spinSpeed { get; set; }
    public int frequency { get; set; }
}