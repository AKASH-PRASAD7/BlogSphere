import conf from "../conf/config.js";
import { Client, Storage, ID } from "appwrite";

class FileUpload {
  client = new Client();
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setEndpoint(conf.projecrId);
    this.bucket = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(conf.bucketId, ID.unique(), file);
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.bucketId, fileId);
      return true;
    } catch (error) {
      throw error;
    }
  }

  filePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.bucketId, fileId);
    } catch (error) {}
  }
}

const fileUpload = new FileUpload();

export default fileUpload;
