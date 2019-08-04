import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {
  @Input() name: string;
  @Input() birthday: string;
  @Input() age: string;
  @Input() main_card_image: string;
  @Input() main_card_image_alt: string;
  @Input() avatar: string;
  @Input() timeUntilBirthday: string;

  constructor() { }

  ngOnInit() {
  }

}
