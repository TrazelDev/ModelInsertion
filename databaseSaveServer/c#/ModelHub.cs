using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Google.Protobuf;
using System.IO;

namespace AspNetCoreSignalR_React.Server
{
    public class ModelHub : Hub
    {
        public async Task sendModels(byte[] message)
        {
            var modelMsg = modelInsertMsg.Parser.ParseFrom(message);
            
            string connectionString = "mongodb://localhost:27017";
            string databaseName = "modelData";

            MongoDBase modelService = new MongoDBase(connectionString, databaseName);

            Model newModel = new Model
            {
                modelName = modelMsg.ModelName,
                modelFamilyName = modelMsg.ModelFamilyName,
                maxRange = modelMsg.MaxRange,
                spinSpeed = modelMsg.SpinSpeed,
                frequency = modelMsg.Frequency
            };

            modelService.CreateModel(newModel);
            List<Model> allModels = modelService.GetAllModels();
            
            string filePath = "Log.txt"; // Specify the file path
            try
            {
                // Open the file in write mode (creates or overwrites the file)
                using (StreamWriter writer = new StreamWriter(filePath))
                {
                    foreach (Model model in allModels)
                    {
                        writer.WriteLine(model.modelName + ",");
                    }
                }

                Console.WriteLine("File write successful.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("An error occurred: " + ex.Message);
            }

            await Clients.AllExcept(Context.ConnectionId).SendAsync("updateModel", message);
        }
        
        public async Task receiveModels()
        {
            string connectionString = "mongodb://localhost:27017";
            string databaseName = "modelData";
            MongoDBase modelService = new MongoDBase(connectionString, databaseName);

            List<Model> allModels = modelService.GetAllModels();
            List<byte[]> serializedModels = new List<byte[]>();
            byte[] clientMsg = new byte[0]; 
            
            foreach(Model model in allModels)
            {
                using (MemoryStream stream = new MemoryStream())
                {
                    modelInsertMsg newMessage = new modelInsertMsg
                    {
                        ModelName = model.modelName,
                        ModelFamilyName = model.modelFamilyName,
                        MaxRange = model.maxRange, 
                        SpinSpeed = model.spinSpeed,
                        Frequency = model.frequency
                    };

                    // Serialize the message and write it to the stream
                    newMessage.WriteTo(stream);

                    byte[] modelData = stream.ToArray();
                    byte lengthByte = (byte)modelData.Length;

                    clientMsg = clientMsg.Concat(new byte[] { lengthByte }).ToArray();
                    clientMsg = clientMsg.Concat(modelData).ToArray();
                }
            }

            string filePath = "Log.txt"; // Specify the file path
            try
            {
                // Open the file in write mode (creates or overwrites the file)
                Console.WriteLine("File write successful.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("An error occurred: " + ex.Message);
            }

            
            using (StreamWriter writer = new StreamWriter(filePath))
            {
                foreach(byte b in clientMsg)
                {
                    writer.WriteLine((int)b);
                }
            }
            
            await Clients.Caller.SendAsync("getAllModels", clientMsg);
        }

        public async Task deleteModels()
        {
            string connectionString = "mongodb://localhost:27017";
            string databaseName = "modelData";
            MongoDBase modelService = new MongoDBase(connectionString, databaseName);
            modelService.DeleteAllModels();

            Console.WriteLine("All models have been deleted");
        }

        public async Task new132()
        {
            await Clients.Caller.SendAsync("updateModel", "hello");
        }
    }
}

