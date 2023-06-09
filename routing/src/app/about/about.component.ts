import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-about',
    template: `<h3>О нас:</h3>
    <p>Мы предлагаем удивительный выбор тортовб печенья и шоколада, <br>созданных по европейским рецептам.</p>`,
    styles: [`
        h3{color:#800000;
        font-size:30px;
        font-style:italic;}
        p{font-style:oblique;
        font-size: 25px;
        color:#696969;
        font-weight:bolder;
    }`
    ]
})

export class AboutComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        
    }
}