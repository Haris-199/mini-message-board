const db = require("../db/queries");

exports.indexGet = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages });
};

exports.createMessageGet = (req, res) => {
  res.render("form");
};

exports.createMessagePost = async (req, res) => {
  await db.addMessage(req.body.username, req.body.text);
  res.redirect("/");
};

exports.messageGet = async (req, res) => {
  const message = await db.getMessageByID(req.params.msgID);
  res.render("message-details", { message });
};
