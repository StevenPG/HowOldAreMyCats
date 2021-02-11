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
  @Input() catBirthdate: Date = new Date();
  @Input() cardImageSrc: String = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  @Input() cardImageAlt: String = "Placeholder image of a Shiba Inu"

  catAge = "";
  catBirthday = "";

  constructor() { }

  ngOnInit(): void {
    this.catBirthday = this.catBirthdate.toDateString()

    let ageInMSec = Date.now() - this.catBirthdate.getTime()
    let ageInSec = ageInMSec / 1000
    let ageInMin = ageInSec / 60
    let ageInHour = ageInMin / 60
    let ageInDays = ageInHour / 24
    let ageInWeeks = ageInDays / 7
    let ageInMonths = ageInWeeks / 4
    let ageInYear = ageInWeeks / 52

    let visibleMonthsAge = Math.floor(ageInMonths)
    let visibleYearsAge = Math.floor(ageInYear)

    if (visibleYearsAge == 0) {
      if (visibleMonthsAge == 1) {
        this.catAge = visibleMonthsAge + " month old"
      } else {
        this.catAge = visibleMonthsAge + " months old"
      }
    } else {
      let months = Math.floor(ageInMonths % 12)

      let displayString = "";

      if (visibleYearsAge == 1) {
        displayString = displayString + visibleYearsAge + " year"
      } else {
        displayString = displayString + visibleYearsAge + " years"
      }

      if (months == 0) {
        displayString = displayString + " old"
      } else if(months == 1) {
        displayString = displayString + " " + months + " month old"
      } else {
        displayString = displayString + " " + months + " months old"
      }

      this.catAge = displayString
    }
  }
}
