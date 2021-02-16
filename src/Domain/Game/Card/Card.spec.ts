import Card from './Card';

describe('test', () => {
    const CARD_NAME = 'ONE RED';
    const IMG_KEY = 'one_red';

    test('Test expected card name', async () => {
        expect(new Card(CARD_NAME, IMG_KEY).getName()).toEqual(CARD_NAME);
    });

    test('Test expected img key', async () => {
        expect(new Card(CARD_NAME, IMG_KEY).getImgKey()).toEqual(IMG_KEY);
    });
});
