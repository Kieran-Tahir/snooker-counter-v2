exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          auth0_id: '100100',
          name: 'Ronnie O\'Sullivan',
          email: 'ron-the-rocket420@gmail.com',
          description: 'Big snooker pro'
        }
      ])
    })
}
