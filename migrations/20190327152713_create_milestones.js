
exports.up = function (knex, Promise) {

  return knex.schema.createTable('milestones', function (table) {
    table.increments('id');                                       // table .incremments will add ".primary()"
    table.string('description', 250);
    table.date('date_achieved');
  })

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('milestones')
};