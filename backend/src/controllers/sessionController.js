const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { login } = req.body;
    const { password } = req.body;

    const user = await connection("users")
      .where("login", login)
      .andWhere("password", password)
      .select("name")
      .first();

    if (!user) {
      return res.status(400).json({ error: "user NOT found" });
    }

    return res.json(user);
  },
};
