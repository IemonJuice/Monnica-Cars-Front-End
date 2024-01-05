import {Component, OnInit} from '@angular/core';
import * as aos from 'aos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit() {
    aos.init();
  }
}
