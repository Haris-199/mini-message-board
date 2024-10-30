const { Client } = require("pg");
require("dotenv").config();

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255) NOT NULL,
    text VARCHAR(300) NOT NULL DEFAULT '',
    add_timestamp TIMESTAMP NOT NULL DEFAULT NOW()
  );

  INSERT INTO messages (username, text)
  VALUES
    ('Greg', 'Rowley is technically my best friend, but that is definitely subject to change.'),
    ('Rowley', 'Zoo wee mama!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `${process.env.RENDER_URL}`,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}

main();
