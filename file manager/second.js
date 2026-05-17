const fs = require("fs");

const path = require("path");

const command = process.argv[2];
const fileName = process.argv[3];

//create full file path 
const filePath = path.join(__dirname,"files",fileName);

//create file
if(command == "create"){
    fs.writeFile(filePath,"",(err) => {
        if (err){
            console.log("error creating file");
            return;
        }
        console.log("file created sucessfully")
    });
}