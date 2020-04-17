exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "Mop the floor",
          notes: "emptu the vacuum afterwards",
          project_id: 1,
          completed: true
        },
        {
          description: "do the dishes",
          notes: "dont forget dishwashing soap",
          project_id: 1,
          completed: true
        },
        {
          description: "Sing a medley",
          notes: "my voice is terrible",
          project_id: 2,
          completed: false
        },
        {
          description: "go for a walk",
          notes: "need to find socks",
          project_id: 3,
          completed: false
        },
        {
          description: "???",
          notes: "profit",
          project_id: 3,
          completed: false
        }
      ]);
    });
};