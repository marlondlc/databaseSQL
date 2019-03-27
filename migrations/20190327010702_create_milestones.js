exports.up = function (knex, Promise) {

  knex.schema.createTable('milestones', t => {
    t.increments()
    t.string('description', 250)
    t.date('date_achieved')
  })

}

exports.down = function (knex, Promise) {
  knex.schema.dropTable('milestones')
};