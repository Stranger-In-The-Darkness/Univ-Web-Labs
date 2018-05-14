class ReferenceItem {
    static department: string;
    private _publisher: string;

    constructor(public title: string, private year: number) {

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

let ref: ReferenceItem = new ReferenceItem("Благие Знамения", 2012);
ref.Publisher = "Терри Пратчет";
ReferenceItem.department = "...";
ref.printItem();
console.log(`${ref.Publisher.toUpperCase()}`);