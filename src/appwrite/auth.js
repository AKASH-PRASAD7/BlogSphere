import conf from "../conf/config.js";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setEndpoint(conf.projecrId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const newUser = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (newUser) {
        //signin user/call another method
        return this.login(email, password);
      } else {
        return newUser;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession();
    } catch (error) {
      throw error;
    }
  }
  async getCurrrntUser() {
    try {
      const user = await this.account.get();

      if (user) {
        return user;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
