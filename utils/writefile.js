import fs from "node:fs"
import process from "node:process"

async function writeFile(filePath, content){
    try {
        await fs.writeFile(filePath, content);
    } catch (error) {
        console.log("Something went wrong while writing the file");
        console.log(error);
        process.exit(1);
    }
}

export { writeFile }