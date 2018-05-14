import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Введите ФИО и зарплату:</label>
    <br />
    <label>Рабочий: </label>
    <input [(ngModel)]="name" placeholder="ФИО">
    <label>Зарпалата: </label>    
    <input [(ngModel)]="salary" placeholder="0">
    <input type="button" (click)="clearWorker()">

    <child-comp [workers]="salary + ' ' + name"></child-comp>`
})

export class AppComponent {
    salary = 0;
    name: '';
    clearWorker(): void {
        this.name = '';
        this.salary = 0;
    }
}
