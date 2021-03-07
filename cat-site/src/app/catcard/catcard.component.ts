import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catcard',
  templateUrl: './catcard.component.html',
  styleUrls: ['./catcard.component.scss']
})
export class CatcardComponent implements OnInit {

  @Input() catName = '';
  @Input() catNickname = '';
  @Input() catDescription = '';
  @Input() catBirthdate: Date = new Date();
  @Input() cardImageSrc: String = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  @Input() cardImageAlt: String = 'Placeholder image of a Shiba Inu';

  catAge = '';
  catBirthday = '';

  constructor() { }

  ngOnInit(): void {
    this.catBirthday = this.catBirthdate.toDateString();

    // Loop through fully and calculate for exact age
    const testMonths = this.countMonths(this.catBirthdate);
    const years = Math.floor(testMonths / 12);
    const months = testMonths % 12;

    if (years === 0) {
      if (months === 1) {
        this.catAge = months + ' month old';
      } else {
        this.catAge = months + ' months old';
      }
    } else {
      let displayString = '';

      if (years === 1) {
        displayString = displayString + years + ' year';
      } else {
        displayString = displayString + years + ' years';
      }

      if (months === 0) {
        displayString = displayString + ' old';
      } else if (months === 1) {
        displayString = displayString + ' ' + months + ' month old';
      } else {
        displayString = displayString + ' ' + months + ' months old';
      }

      this.catAge = displayString;
    }
  }

  public countMonths( birthDate: Date ): number {
    const stepDate = new Date(birthDate);
    const endDate = new Date(Date.now());
    let monthCount = 0;

    while ( stepDate <= endDate ) {
      stepDate.setMonth(stepDate.getMonth() + 1);
      monthCount += 1;
    }

    if ( stepDate !== endDate ) {
      monthCount -= 1;
    }

    return monthCount;
  }
}
