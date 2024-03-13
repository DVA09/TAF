const axios = require("axios");
const pet = require("../utils/pet.json");
const dbClient = require("../utils/client");
const address = require("../utils/ConfigurationData.json");
// const Hooks = require("../utils/hooks");


describe("API to database collection", function () {
  before(function () {
    dbClient.connect();
    dbClient.query(
      "INSERT INTO pets (id, name) VALUES (1, 'Bentley'), (2, 'doggie'), (3, 'Tank'), (4, 'Marley'), (5, 'Milo'), (6, 'Gunner'), (7, 'Louie'), (8, 'Thor'), (9, 'Cooper'), (10, 'Leo')"
    );
  });

  after(function () {
    dbClient.query("TRUNCATE TABLE pets");
  });

  it("Create a new pet to the store", async () => {
    const response = await axios.post(address.url, pet);
    expect(response.status).toBe(200);
    expect(response.data.name).toBe("doggie");
    expect(response.data.status).toBe("available");
  });

  it("Find pet by ID", async () => {
    const response = await axios.get(`${address.url}/9`);
    const namePet =  await dbClient.query("SELECT name FROM pets WHERE id=2");
    expect(response.status).toBe(200);
    expect(response.data.name).toBe(namePet.rows[0].name);
  });

  it("Update an existing pet", async () => {
    const response = await axios.put(address.url, pet);
    expect(response.status).toBe(200);
    expect(response.data.name).toBe("doggie");
    expect(response.data.status).toBe("available");
  });

  it("Delete a pet", async () => {
    const response = await axios.put(`${address.url}/9223372036854584000`);
    expect(response.status).toBe(200);
  });
});
