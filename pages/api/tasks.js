// import mongodb from 'mongodb';

// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cgb6icj.mongodb.net/?retryWrites=true&w=majority`;

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

// console.log(uri)

// async function run() {
//     try{
//         const taskCollection = client.db('taskDatabase').collection('tasks');

//         app.get('/tasks', async (req, res) =>{
//             const cursor =taskCollection.find({});
//             const tasks =await cursor.toArray();
//             res.send(tasks);
//         })
//         app.post('/tasks', async (req, res) =>{
//             const task = req.body;
//             const result =await taskCollection.insertOne(task);
//             task._id = result.insertedId;
//             console.log(result);
        
//             res.send(task);
//         })
        
//     }
//     finally{

//     }
// }

// run().catch( err =>console.log(err));


// import fs from "fs";
// import path from "path";

// function getData() {
//   const filePath = path.join(process.cwd(), "data", "tasks.json");
//   const fileData = fs.readFileSync(filePath);
//   const data = JSON.parse(fileData);
//   return data;
// }
// function handler(req, res) {
//   if (req.method === "GET") {
//     const data = getData();
//     res.status(200).json({ message: data });
//   } else if (req.method === "POST") {
//     const { title, image, email, description } = req.body;
//     const newTask = { title, image, email, description, id:Date.now() };

//     const filePath = path.join(process.cwd(), "data", "tasks.json");
//     const data = getData();
//     data.push(newTask);
//     fs.writeFileSync(filePath,JSON.stringify(data))
//     res.status(200).json({ message: "Added", book:newTask });
//   }
// }

// export default handler;
