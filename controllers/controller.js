const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "What's up!",
    user: "Alex",
    added: new Date(),
  },
  {
    text: "Zoo wee mama!",
    user: "Rowley",
    added: new Date(),
  },
];

exports.indexGet = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
};

exports.createMessageGet = (req, res) => {
  res.render("form");
};

exports.createMessagePost = (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
};

exports.messageGet = (req, res) => {
  const message = messages[req.params.msgIndex];
  res.render("message-details", { message });
};
