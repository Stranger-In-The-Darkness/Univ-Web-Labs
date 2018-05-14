import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Введите параметры:</label>
    <br />
    <input id='a' [(ngModel)]="a" placeholder="a">
    <label>x</label>
    <sup>2</sup>
    <label>+</label>
    <input id='b' [(ngModel)]="b" placeholder="b">
    <label>x</label>
    <label>+</label>
    <input id='c' [(ngModel)]="c" placeholder="c">
    <label>=0</label>
    <button (click)="computeRoots(a, b, c)">Click!</button>
    <h1>x1 = {{res1}}</h1>
    <h1>x2 = {{res2}}</h1>`
})

export class AppComponent {
    res1 = '';
    res2 = '';
    computeRoots(a: number, b:number, c:number) {
        this.res1 = '';
        this.res2 = '';
        var D = b * b - 4 * a * c;
        if (D > 0) {
            this.res1 += String((-b - Math.sqrt(D)) / (2 * a));
            this.res2 += String((-b + Math.sqrt(D)) / (2 * a));
        }
        else if (D === 0) {
            this.res1 = this.res2 = String(-b / (2 * a));
        }
        else {
            this.res1 = this.res2 = 'No real roots :(';
        }
    };
}
