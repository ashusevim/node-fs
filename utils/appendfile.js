import fs from "node:fs"
import process from "node:process"

async function appendFile(){
    try {
        await fs.appendFile(userFilePath, "this is the content I want to append");
        console.log("File appended successfully");
    } catch (error) {
        console.log("Something went wrong while appending the file");
        console.error(error);
        process.exit(1);
    }
}

export { appendFile };