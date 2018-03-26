function createCustomerID(name: string, id: number): string {
    return name.concat(id.toString());
}

let myID: string = createCustomerID('Ann', 10);

let IdGenerator: (name: string, id: number) => string;
IdGenerator = (name: string, id: number) => { return name.concat(id.toString()); };

IdGenerator = createCustomerID;

console.log(IdGenerator('S', 2));