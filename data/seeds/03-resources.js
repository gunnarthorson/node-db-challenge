exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "Google", description: "Access the world's information" },
        { name: "Laptop", description: "Have to learn how to code somehow" },
        { name: "Shampoo", description: "Gotta get rid of that dandruff" }
      ]);
    });
};