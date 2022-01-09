exports.up = async (knex) => {
  await knex.schema.createTable('transfers', (t) => {
    t.increments('id').primary();
    t.string('description').notNull();
    t.date('date').notNull();
    t.decimal('ammount', 15, 2).notNull();
    t.integer('acc_ori_id')
      .references('id')
      .inTable('accounts')
      .notNull();
    t.integer('acc_dest_id')
      .references('id')
      .inTable('accounts')
      .notNull();
    t.integer('user_id')
      .references('id')
      .inTable('users')
      .notNull();
  });
  return knex.schema.table('transactions', (t) => {
    t.integer('transfer_id')
      .references('id')
      .inTable('transfers');
  });
};

exports.down = async (knex) => {
  await knex.schema.table('transactions', (t) => {
    t.dropColumn('transfer_id');
  });

  return knex.schema.dropTable('transfers');
};
