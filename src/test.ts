import { S3Client, HeadBucketCommand, PutObjectCommand, GetObjectCommand, DeleteObjectCommand, ListObjectsV2Command, CreateBucketCommand, GetObjectCommandOutput } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
    region: "us-east-005",
    endpoint: "https://b0v8.sg01.idrivee2-79.com",
    credentials: {
        accessKeyId: "HFW2ImDpEJ1fmQ6fhsq3",
        secretAccessKey: "mJXqLPtLUe4US5L9uGrrlTUxgrlv29IRNHrF6Ddh",
    },
});

async function main() {
    const bucketName = "zann6825";

    const expires = new Date(); // Buat objek Date baru
    expires.setMinutes(expires.getMinutes() + 1); // Modifikasi objek Date yang sama

    const command = new PutObjectCommand({ Bucket: bucketName, Key: "temp/vid.mp4" });
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    // const command = new ListObjectsV2Command({ Bucket: bucketName });
    // const url = await s3Client.send(command);

    console.log(url);
}

main();
