import process from "node:process"
import fs from "node:fs"
async function readFile(){
    try{
        const data = await fs.readFile(userFilePath, 'utf8');
        console.log("Raw data: ", data);
    }catch(error){
        console.log('Something went wrong while reading the file');
        console.log(error);
        process.exit(1);
    }
}

export { readFile }