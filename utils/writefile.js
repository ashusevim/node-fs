import fs from "node:fs"
import process from "node:process"
async function writeFile(){
    try {
        await fs.writeFile(userFilePath, "this is the content I want to write");
    } catch (error) {
        console.log("Something went wrong while writing the file");
        console.log(error);
        process.exit(1);
    }
}

export { writeFile }