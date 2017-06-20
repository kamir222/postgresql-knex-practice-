"strict";
const pg = require("pg"); //postgres package
const settings = require("./settings"); // settings.json
const keyword = process.argv[2];
// how do I export famous_people.sql into this file to run queries?

const input = `
  SELECT * FROM famous_people
  WHERE first_name = $1::text`
  //sql value that selects all entity instances
  //from a table where first_name is a text

// create a config to configure both pooling behavior and client options
//location of database --> host and port
const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});



client.connect((err) => { //establish a connection with the database
  if (err) {
    return console.error("Connection Error", err);
  }


  client.query(input, [keyword], (err, result) => { //make a query on that database
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Searching...");
    output(result.rows);
    client.end();
  });
});

const output = (rows) => {
  console.log(`Found ${rows.length} person(s) by the name of ${keyword}.`);
  console.log(`- ${rows[0].id}: ${rows[0].first_name}`);

  // THIS IS ANOTHER WAY OF DOING LINE 44
  // for (let row of rows) {
  //   console.log(`- ${row.id}: ${row.first_name}`);
  // }
}
