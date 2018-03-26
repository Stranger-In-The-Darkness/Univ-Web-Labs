function getAllWorkers(): {name: string, surname: string, available: boolean, salary: number}[] {
    let workers = [
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000 },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500 },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600 },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300 }
    ];
    return workers;
}

function logFirstAvailable(workers: { name: string, surname: string, available: boolean, salary: number }[]): void {
    console.log(workers.length);
    for (let entry of workers) {
        if (entry.available) {
            console.log(entry.name + ' ' + entry.surname);
        }
    }
}