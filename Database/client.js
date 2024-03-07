const { Client } = require("pg");

class DBClient {
  constructor() {
    this.client = new Client({
      host: "localhost",
      user: "postgres",
      port: 5432,
      password: "12345",
      database: "postgres"
    });
  }

  async connect() {
    await this.client.connect();
    console.log("Connected to database");
  }

  async query(text, params) {
    return await this.client.query(text, params);
  }

  async disconnect() {
    await this.client.end();
    console.log("Disconnected from database");
  }
}

module.exports = new DBClient();