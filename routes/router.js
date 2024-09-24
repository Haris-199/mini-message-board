const { Router } = require("express");

const router = Router();

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

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

router.get("/message/:msgIndex", (req, res) => {
  const message = messages[req.params.msgIndex];
  res.render("message-details", { message });
});

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

module.exports = router;
