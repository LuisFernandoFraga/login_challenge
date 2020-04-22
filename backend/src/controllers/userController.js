const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const users = await connection("users").select("*");

    return res.json(users);
  },

  async create(req, res) {
    const { name, login, password } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("users").insert({
      id,
      name,
      login,
      password,
    });

    return res.json({ id });
  },
};
