class ReferenceItem {
    title: string;
    year: number;

    constructor(newTitle: string, newYear: number) {
        console.log('Creating a new ReferenceItem ...');
        this.title = newTitle;
        this.year = newYear;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
    }
}

let ref: ReferenceItem = new ReferenceItem("Благие Знамения", 2012);
ref.printItem();