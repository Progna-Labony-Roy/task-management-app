import fs from "fs";
import path from "path";

function handler( req, res){
    if(req.method === "GET"){
        const filePath= path.join(process.cwd(),'data','tasks.json');
        const fileData= fs.readFileSync(filePath);
        const data = JSON.parse(fileData);
        console.log(data);
        res.status(200).json({message:data})
    }
}

export default handler;