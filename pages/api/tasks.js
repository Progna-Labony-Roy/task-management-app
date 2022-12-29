import fs from "fs";
import path from "path";

function getData() {
  const filePath = path.join(process.cwd(), "data", "tasks.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}
function handler(req, res) {
  if (req.method === "GET") {
    const data = getData();
    res.status(200).json({ message: data });
  } else if (req.method === "POST") {
    const { title, image, email, description } = req.body;
    const newTask = { title, image, email, description, id:Date.now() };
    const data = getData();
    data.push(newTask);
    res.status(200).json({ message: "Added", book:newTask });
  }
}

export default handler;
