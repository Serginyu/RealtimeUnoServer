import Game from './Game';

describe('test', () => {
    test('Initial game state', async () => {
        expect(new Game().getStatus()).toEqual('PENDING');
    });
});
