abstract class ReferenceItem {
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

    abstract printCitation: () => void;
}

class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation = () => { console.log(`${this.title} ${this.year}`); };
}