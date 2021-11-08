exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          auth0_id: '100100',
          first_name: 'Kieran',
          last_name: 'Tahir',
          email: 'ron-the-rocket420@gmail.com',
          bio: 'Big snooker pro',
          profile_pic: '',
          rating: '4.5'
        }
      ])
    })
}
