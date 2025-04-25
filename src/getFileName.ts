import fs from "fs/promises";
import path from "path";


export async function getAllFilesAsync(dirPath: string): Promise<string[]> {
    let filesList: string[] = [];

    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            const subFiles = await getAllFilesAsync(fullPath);
            filesList = filesList.concat(subFiles);
        } else {
            filesList.push(fullPath);
        }
    }

    return filesList;
}

