export default class Game {
    private status: string = 'PENDING';

    constructor() {


    }

    getStatus(): string
    {
        return this.status;
    }
}
