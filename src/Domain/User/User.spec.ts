import User from './User';

describe('test', () => {
    test('Test user name', async () => {
        expect(new User('Test').getName()).toEqual('Test');
    });
});
