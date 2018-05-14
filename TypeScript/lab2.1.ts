interface IWorker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
}

function getAllWorkers(): IWorker[] {
    let w1: IWorker = { id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 };
    let w2: IWorker = { id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500 };
    let w3: IWorker = { id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 };
    let w4: IWorker = { id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 };
    let workers = [
        w1, w2, w3, w4
    ];
    return workers;
}

function getWorkerByID(id: number, array: IWorker[]): string {
    let x = array.find(entry => { return entry.id === id; });
    if (x) {
        return `${x.name} ${x.surname} ${x.salary}`;
    }
    else return '';
}

function printWorker(worker: IWorker) {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}