interface IPrizeLogger {
    log: (param: string) => void;
}

interface IWorker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    markPrize: IPrizeLogger;
}

let logPrize: IPrizeLogger;

function doSmth(param: string) {
    console.log("^3^");
}

logPrize.log = doSmth;