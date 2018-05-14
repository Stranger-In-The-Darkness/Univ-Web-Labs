import { Input, Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>ФИО: {{maxSalary().worker}}</p>
    <p>Зарплата: {{maxSalary().salary}}</p>`,
    styles: [`h2, p {color:red;}`]
})

export class ChildComponent {
    private _workers: Array<{ salary: number, worker: string }> = new Array<{ salary: number, worker: string }>();

    @Input()
    set workers(w: string) {
        let work: { salary: number, worker: string } = { salary: 0, worker: ''};
        if (parseInt(w.split(' ')[0]) < 0)
            work.salary = 0;
        else
            work.salary = parseInt(w.split(' ')[0]);
        work.worker = w.split(' ')[1];
        this._workers.push(work);
    }
    //get workers() { return this._workers; }

    maxSalary(): { salary: number, worker: string } {
        let res: { salary: number, worker: string };
        for (let i = 0; i < this._workers.length; i++) {
            if (i == 0) {
                res = this._workers[0];
                continue;
            }
            else {
                if (res.salary < this._workers[i].salary) {
                    res = this._workers[i];
                }
            }
        }
        return res;
    }
}
