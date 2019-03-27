const setting = require('./settings.json')
const userInput = process.argv[2]
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
  .where({ first_name: userInput })
  .orWhere({ last_name: userInput })
  .asCallback((err, rows) => {
    if (err) return console.error(err);

    console.log(`Found ${rows.length} person(s) by the name '${userInput}'`)
    rows.forEach((person, index) => {                           //person === each obj  || index -> is the index of that iteraction
      console.log(index, person)
    })

    knex.destroy()
  })
