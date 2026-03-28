import fs from "node:fs"
import process from "node:process"

async function appendFile(filePath, content){
    try {
        await fs.appendFile(filePath, content);
        console.log("File appended successfully");
    } catch (error) {
        console.log("Something went wrong while appending the file");
        console.error(error);
        process.exit(1);
    }
}

export { appendFile };