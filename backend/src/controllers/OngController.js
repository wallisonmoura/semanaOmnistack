const generateUniqueId = require("../utils/generateUniqueId");
const connection = require("../database/connection");

module.exports = {
  async read(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;
    /*const ong = await connection("ongs")
      .where("id", id)
      .select("id");

    if (ong.id !== id) {
      return res.status(400).json({ error: "Id inválido!" });
    }
*/
    await connection("ongs")
      .where("id", id)
      .delete();

    return res.status(204).send();
  }
};
