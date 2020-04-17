exports.up = function(knex) {
    return knex.schema
      .createTable("projects", tbl => {
        tbl.increments();
  
        tbl
          .string("name", 25)
          .notNullable()
          .unique();
  
        tbl.text("description", 255);
  
        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(0);
      })
  
      .createTable("tasks", tbl => {
        tbl.increments();
  
        tbl.string("description", 255).notNullable();
  
        tbl.text("notes", 255);
  
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
  
        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(0);
      })
  
      .createTable("resources", tbl => {
        tbl.increments();
  
        tbl.string("name", 100).notNullable();
  
        tbl.text("description", 255);
      })
  
      .createTable("proj-res", tbl => {
        tbl.primary(["project_id", "resource_id"]);
  
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
  
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("proj-res")
      .dropTableIfExists("resources")
      .dropTableIfExists("tasks")
      .dropTableIfExists("projects");
  };