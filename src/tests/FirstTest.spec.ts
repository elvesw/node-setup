import { User } from '@models/User';

test('it should be ok', () => {
  const user = new User();

  user.name = 'user01';

  expect(user.name).toEqual('user01');
});
