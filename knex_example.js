"strict";

// const pg = require("pg"); //postgres package
const settings = require("./settings"); // settings.json
const firstName =  process.argv[2];
const lastName = process.argv[3];
const date = process.argv[4];

const knex = require('knex')({
  client: 'pg',
  connection: {
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
  }
});

// [ anonymous {
//     id: '1',
//     first_name: 'Abraham',
//     last_name: 'Lincoln',
//     birthdate: 1809-02-12T00:00:00.000Z }
// ]


knex('famous_people').returning('id').insert([
  {
   first_name: firstName,
   last_name: lastName,
   birthdate: '1809-02-12T00:00:00.000Z'}
]).then((id) => {
  console.log(id);
  knex.select('*').from('famous_people').then((rows) => {
      console.log(rows);
  }).catch((err) => {
    throw err
  })
})
