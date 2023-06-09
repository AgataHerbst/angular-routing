import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-price',
    template: `<h3>Цена</h3>
    <p>Цена соответствует качеству!</p>`,
    styles: [`
    h3{color:#800000;
    font-size:30px;
    font-style:italic;}
    p{font-style:oblique;
    color:#696969;
    font-size: 25px;
    font-weight:bolder;
}`
    ]
})

export class PriceComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        
    }
}