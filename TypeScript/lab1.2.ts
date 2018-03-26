enum Category {
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master
}

function getAllWorkers(): { name: string, surname: string, available: boolean, salary: number, category: Category }[] {
    let workers = [
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.Business_analyst },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Scrum_master },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer }
    ];
    return workers;
}

function logFirstAvailable(workers: { name: string, surname: string, available: boolean, salary: number, category: Category }[]): void {
    console.log(workers.length);
    for (let entry of workers) {
        if (entry.available) {
            console.log(entry.name + ' ' + entry.surname);
        }
    }
}

function getWorkersNamesByCategory(worker: Array<{ name: string, surname: string, available: boolean, salary: number, category: Category }>, category: Category): Array<string> {
    var res: Array<string>;
    for (let entry of worker) {
        if (entry.category == category) {
            res.push(entry.surname);
        }
    }
    return res;
}

function logWorkersNames(array: string[]): void {
    for (let entry of array) {
        console.log(entry);
    }
}