const { Client } = require("pg");
require("dotenv").config();

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255) NOT NULL,
    text VARCHAR(300) NOT NULL DEFAULT '',
    add_date DATE NOT NULL DEFAULT CURRENT_DATE,
    add_time TIME NOT NULL DEFAULT NOW()
  );

  INSERT INTO messages (username, text)
  VALUES
    ('Greg', 'Rowley is technically my best friend, but that is definitely subject to change.'),
    ('Rowley', 'Zoo wee mama!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.PGHOST,
    user: process.env.USER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: +process.env.PGPORT,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}

main();
