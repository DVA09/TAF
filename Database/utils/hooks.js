class Hooks {
  async before() {
    await this.client.connect();
    await this.client.query(
      "INSERT INTO pets (id, name) VALUES (1, 'Bentley'), (2, 'Mari'), (3, 'Tank'), (4, 'Marley'), (5, 'Milo'), (6, 'Gunner'), (7, 'Louie'), (8, 'Thor'), (9, 'Cooper'), (10, 'Leo')"
    );
  }

  async after() {
    await this.client.query("TRUNCATE TABLE pets");
    await this.client.end();
  }
}

module.exports = new Hooks();