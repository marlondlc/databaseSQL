const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});



client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  const [node, path, firstName] = process.argv; // will use this in query needs to be before

  const selectQueryText = `SELECT * FROM famous_people WHERE first_name = '${firstName}'`;

  client.query(selectQueryText, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }

    //console log PRINTPEOPLE below should be a function.
    console.log(`Found ${result.rowCount} person(s) by the name '${firstName}'`)
    result.rows.forEach(row => {
      const bDate = row.birthdate.toISOString().slice(0, 10)              // dealing with dates look at ISOSTRING
      console.log(`-${row.id}: ${row.first_name} ${row.last_name}, born '${bDate}'`)
    })

    client.end();
  });
});
