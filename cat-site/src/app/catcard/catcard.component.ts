import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catcard',
  templateUrl: './catcard.component.html',
  styleUrls: ['./catcard.component.scss']
})
export class CatcardComponent implements OnInit {

  @Input() catName: string = "";
  @Input() catNickname: string = "";
  @Input() catDescription: string = "";
  @Input() catBirthday: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
