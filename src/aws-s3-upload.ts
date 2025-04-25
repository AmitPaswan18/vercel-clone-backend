import fs from 'fs';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import 'dotenv/config';

const s3 = new S3Client({
    endpoint: process.env.ENDPOINT_URL,
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID!,
        secretAccessKey: process.env.SECRET_ACCESS_KEY!,
    },
    // maxRetries: 0,
    // remove checksum headers
    requestChecksumCalculation: 'WHEN_REQUIRED',
    responseChecksumValidation: 'WHEN_REQUIRED',
    forcePathStyle: true
});


export async function uploadFile(fileName: string, localFilePath: string) {
    try {
        // Read the file content
        const fileContent = fs.readFileSync(localFilePath);
        const command = new PutObjectCommand({
            Bucket: process.env.BUCKET_NAME!, // Use your actual bucket name here
            Key: fileName,
            Body: fileContent,
        });

        // Send the command to upload the file
        const response = await s3.send(command);
        console.log('File uploaded successfully:', response);
        return response;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
}