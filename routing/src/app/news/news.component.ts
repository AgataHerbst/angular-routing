import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-news',
    template: `<h3>Новости!</h3>
    <p>Хотим сообщить замечательную новость:<br>наша кондитерская запускает линию свадебных тортов!</p>`,
    styles: [`
    h3{color:#800000;
    font-size:30px;
    font-style:italic;}
    p{font-style:#A52A2A;
    color:#696969;
    font-size: 25px;
    font-weight:bolder;
}`
    ]
})

export class NewsComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        
    }
}