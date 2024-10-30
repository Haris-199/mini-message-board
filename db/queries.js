const pool = require("./pool");

exports.getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

exports.getMessageByID = async (ID) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id=($1)", [ID]);
  return rows[0];
};

exports.addMessage = async (username, text) => {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [username, text]);
};
