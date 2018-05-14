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

class UniversityLibrarian implements ILibrarian {
    name: string;
    email: string;
    department: string;
    assistCustomer = (custName: string) => { console.log(`${this.name} is assisting ${custName}`); };
}

let favouriteLibrariran: ILibrarian = new UniversityLibrarian();
favouriteLibrariran.name = "Roger";
favouriteLibrariran.assistCustomer("Steve");