class ReferenceItem {
    static department: string;
    private _publisher: string;

    constructor(public title: string, protected year: number) {

    }

    get Publisher(): string {
        return this._publisher;
    }

    set Publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
    }
}

class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
}

let refBook = new Encyclopedia("Encyclopedia", 2000, 5);
refBook.printItem();