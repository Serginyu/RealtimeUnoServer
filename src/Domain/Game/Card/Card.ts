export default class Card {
    private name: string;
    private imgKey: string;

    constructor(name: string, imgKey: string) {
        this.name = name;
        this.imgKey = imgKey;
    }

    public getName(): string
    {
        return this.name;
    }

    public getImgKey(): string
    {
        return this.imgKey;
    }
}
