import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public messageForThePeople: string;

    ngOnInit() {
        this.messageForThePeople = 'Hello World! Let\'s shred some gnar yo';
        console.log('I\'M ALIVE!!!!', this.messageForThePeople);
    }
}
