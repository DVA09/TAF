const axios = require("axios");
const { Client } = require("pg");
const pet = require("../utils/pet.json");
const client = new Client({ 
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "12345",
  database: "postgres" 
});

describe("API to database collection", function () {
  before(function () {
    client.connect();
    client.query(
      "INSERT INTO pets (id, name) VALUES (1, 'Bentley'), (2, 'Mari'), (3, 'Tank'), (4, 'Marley'), (5, 'Milo'), (6, 'Gunner'), (7, 'Louie'), (8, 'Thor'), (9, 'Cooper'), (10, 'Leo')"
    );
  });

  after(function () {
    client.query("TRUNCATE TABLE pets");
  });

  it("Create a new pet to the store", async () => {
    const response = await axios.post(
      "https://petstore.swagger.io/v2/pet",
      pet
    );
    expect(response.status).toBe(200);
    expect(response.data.name).toBe("doggie");
    expect(response.data.status).toBe("available");
  });

  it("Find pet by ID", async () => {
    const response = await axios.get("https://petstore.swagger.io/v2/pet/9");
    const namePet =  await client.query("SELECT name FROM pets WHERE id=2");
    expect(response.status).toBe(200);
    expect(response.data.name).toBe(namePet.rows[0].name);
  });

  it("Update an existing pet", async () => {
    const response = await axios.put("https://petstore.swagger.io/v2/pet", pet);
    expect(response.status).toBe(200);
    expect(response.data.name).toBe("doggie");
    expect(response.data.status).toBe("available");
  });

  it("Delete a pet", async () => {
    const response = await axios.put("https://petstore.swagger.io/v2/pet/9223372036854584000");
    expect(response.status).toBe(200);
  });
});
