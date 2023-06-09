import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `<h3>The Butterscoth baker!</h3>
    <p>Войдите в дверь и столкнитесь лицом к лицу с рогом изобилия вкусных, <br>восхитительных и соблазнительных угощений!</p>`,
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

export class HomeComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        
    }
}