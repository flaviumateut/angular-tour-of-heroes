import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-tour-of-heroes';
  heroes: { id: number; name: string }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.heroes = [
      { id: 1, name: 'windstorm' },
      { id: 2, name: 'bombasto' },
      { id: 3, name: 'magneta' },
      { id: 4, name: 'tornado' },
    ];
  }

  oddEven(num: number) {
    if (num % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
}
