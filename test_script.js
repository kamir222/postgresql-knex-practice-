const pg = require("pg"); // requiring node-postgres
const settings = require("./settings"); // requiring settings.json

//create a config to configure pooling behaviour and client options
//take this information from the /settings.json file
const client = new new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT $1::init AS number"), ["1"], (err, result) => {
    if (err) {
      return console.error("error running query", err)
    }
    console.log(result.rows[0].number); //output: 1
    client.end();
  });
});
