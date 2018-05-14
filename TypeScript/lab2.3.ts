interface IPerson {
    name: string;
    email: string;
}

interface IAuthor extends IPerson {
    numBookPublished: number;
}

interface ILibrarian extends IPerson {
    department: string;
    assistCustomer: (custName: string) => void;
}

let favouriteAuthor: IAuthor = {
    name: "Громыко",
    email: "none@none.com",
    numBookPublished: 10
}

function assist(custName: string): void {
    console.log(custName);
}

let favouriteLibrarian: ILibrarian = {
    name: "Громыко",
    email: "none@none.com",
    department: "1",
    assistCustomer: (custName: string) => { console.log(custName); }
}