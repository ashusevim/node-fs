import process from "node:process"
import fs from "node:fs"

async function readFile(filePath){
    try{
        const data = await fs.promises.readFile(filePath, 'utf8');
        console.log("Raw data: ", data);
    }catch(error){
        console.log('Something went wrong while reading the file');
        console.log(error);
        process.exit(1);
    }
}

export { readFile }