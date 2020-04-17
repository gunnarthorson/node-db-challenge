exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Lambda School",
          description: "Learn how to cod by attending Lambda School",
          completed: true
        },
        {
          name: "Improve my web dev skills",
          description: "Study hard",
          completed: false
        },
        {
          name: "Get A Job",
          description: "PROFIT",
          completed: false
        }
      ]);
    });
};