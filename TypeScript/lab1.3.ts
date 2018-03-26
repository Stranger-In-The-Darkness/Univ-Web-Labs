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

function forEachWorker(array: { name: string, surname: string, available: boolean, salary: number, category: Category, id: number }[]): void {
    array.forEach(entry => console.log(entry.name + ' ' + entry.surname));
}

function getWorkerByID(id: number, array: { name: string, surname: string, available: boolean, salary: number, category: Category, id: number }[]): string {
    let x = array.find(entry => { return entry.id === id; });
    if (x) {
        return '${x.name} ${x.surname} ${x.salary}';
    }
    else return '';
}