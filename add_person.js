const setting = require('./settings.json')
const [node, path, first_name, last_name, birthdate] = process.argv;

// const knex = require('knex')(knexConfig)

var knex = require('knex')({
  client: setting.client,
  connection: {
    host: setting.host,
    user: setting.user,
    password: setting.password,
    database: setting.database
  }
});

knex('famous_people')
  .returning(['id', 'first_name', 'last_name', 'birthdate'])
  .insert({ first_name, last_name, birthdate })
  .asCallback((err, rows) => {
    if (err) throw err
    console.log(rows)
    knex.destroy()
  })
