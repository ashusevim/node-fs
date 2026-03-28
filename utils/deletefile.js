import fs from "node:fs"
import process from "node:process"

async function deleteFile(filePath){
    try {
        await fs.promises.unlink(filePath);
        console.log("File deleted successfully");
    } catch (error) {
        console.log("Something went wrong while deleting the file");
        console.error(error);
        process.exit(1);
    }
}

export { deleteFile };