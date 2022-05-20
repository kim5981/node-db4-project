/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
    .createTable("recipes", tbl => {
        tbl.increments("recipe_id") // generates unique id column called recipe_id (the primary key)
        tbl.string("recipe_name", 100)
            .notNullable()
            .unique()
    })
    .createTable("ingredients", tbl => {
        tbl.increments("ingredient_id")
        tbl.string("ingredient_name", 100)
            .notNullable()
        tbl.string("ingredient_unit", 5)
    })
    .createTable("steps", tbl => {
        tbl.increments() // auto-generates a unique id column
    })
    .createTable("step_ingredients", tbl => {
        tbl.increments() // auto-generates a unique id column
    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//! vv these vv need to be in reverse order of ^^ these ^^ 
exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists("step_ingredients")
  .dropTableIfExists("steps")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes")
};
