enum Category {
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master
}

function getAllWorkers(): { name: string, surname: string, available: boolean, salary: number, category: Category, id: number }[] {
    let workers = [
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst, id: 1 },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Scrum_master, id: 2 },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer, id: 3 },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, id: 4 }
    ];
    return workers;
}

function createCustomer(name: string, age?: number, city?: string): void {
    if (age) {
        if (city) {
            console.log('${name} ${age} ${city}');
            return;
        }
        else {
            console.log('${name}, ${age}');
            return;
        }
    }
    else if (city) {
        console.log('${name} ${city}');
        return;
    }
    console.log('${name}');
}

createCustomer('Ann');
createCustomer('Ann', 21);
createCustomer('Ann', 21, 'Kyiv');

function getWorkersNamesByCategory(worker: Array<{ name: string, surname: string, available: boolean, salary: number, category: Category, id: number }>, category: Category = Category.Designer): Array<string> {
    var res: Array<string>;
    for (let entry of worker) {
        if (entry.category == category) {
            res.push(entry.surname);
        }
    }
    return res;
}

getWorkersNamesByCategory(getAllWorkers());

function logFirstAvailable(workers: { name: string, surname: string, available: boolean, salary: number, category: Category, id: number }[] = getAllWorkers()): void {
    console.log(workers.length);
    for (let entry of workers) {
        if (entry.available) {
            console.log(entry.name + ' ' + entry.surname);
        }
    }
}

//Пришлось немного переписать
function getWorkerByID(id: number, array: { name: string, surname: string, available: boolean, salary: number, category: Category, id: number }[]): { name: string, surname: string, available: boolean, salary: number, category: Category, id: number } {
    let x = array.find(entry => { return entry.id === id; });
    if (x) {
        return x;
    }
    else return { name: '', surname: '', available: false, salary: 0, category: Category.Business_analyst, id: 0 };
}

function сheckoutWorkers(customer: string, workerIDs: number[]): string[] {
    let res: string[];

    workerIDs.forEach(entry => { var x = getWorkerByID(entry, getAllWorkers()); if (x.available) { res.push('${x.name} ${x.surname}'); } });
    console.log(customer);
    return res;
}

var myWorkers = сheckoutWorkers('Ann', [1, 2, 4]);
myWorkers.forEach(entry => console.log(entry));