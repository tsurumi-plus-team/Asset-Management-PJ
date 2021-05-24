import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor(private router: ActivatedRoute) { }

    ngOnInit() {
        this.router.queryParams.subscribe(params => {
            console.log('hehe anh xin ', params);
          });
    }
}
