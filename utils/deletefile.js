import fs from "node:fs"
import process from "node:process"

async function deleteFile(){
    try {
        await fs.deleteFile(userFilePath);
        console.log("File deleted successfully");
    } catch (error) {
        console.log("Something went wrong while deleting the file");
        console.error(error);
        process.exit(1);
    }
}

export { deleteFile };