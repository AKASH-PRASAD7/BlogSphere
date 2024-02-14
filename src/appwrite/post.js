import conf from "../conf/config.js";
import { Client, Databases } from "appwrite";

class Service {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setEndpoint(conf.projecrId);
    this.databases = new Databases(this.client);
  }

  async createPost({ title, slug, content, feauturedImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        {
          userId,
          title,
          content,
          slug,
          feauturedImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, feauturedImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        {
          title,
          content,
          feauturedImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  async getPosts() {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.collectionId
      );
    } catch (error) {
      throw error;
    }
  }
}

const service = new Service();

export default service;
