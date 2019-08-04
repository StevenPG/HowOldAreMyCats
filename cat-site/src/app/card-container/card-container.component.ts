import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  // Names
  name_Eli = "Eli";
  name_Umbra = "Umbra";
  name_Bucket = "Bucket";
  name_Bitty = "Bitty";
  name_Wilson = "Wilson";
  name_Pixie = "Pixie";
  name_MilkyMoo = "Milky Moo";

  // Birthdays
  EliBirthday = new Date('May 1, 2010 10:15:00');
  UmbraBirthday = new Date('December 8, 2015 14:26:00');
  BucketBirthday = new Date('May 7, 2017 05:04:00');
  BittyBirthday = new Date('August 22, 2017 02:36:00');
  WilsonBirthday = new Date('April 27, 2018 16:45:00');
  PixieBirthday = new Date('April 19, 2019 19:10:00');
  MilkyMooBirthday= new Date('May 27, 2019 12:59:00');

  // Calculated Ages
  EliAge: string;
  UmbraAge: string;
  BucketAge: string;
  BittyAge: string;
  WilsonAge: string;
  PixieAge: string;
  MilkyMooAge: string;

  // Avatar Images
  EliAvatar = "https://i.imgur.com/sgKH3H2.jpg?1";
  UmbraAvatar = "https://i.imgur.com/TcYvgJo.jpg?1";
  BucketAvatar = "https://i.imgur.com/c6YfmLK.jpg";
  BittyAvatar = "https://i.imgur.com/kY2aEUA.jpg?1";
  WilsonAvatar = "https://i.imgur.com/J2IRbrg.jpg?1";
  PixieAvatar = "https://i.imgur.com/CazLbo4.jpg?1";
  MilkyMooAvatar = "https://i.imgur.com/gEQtsnN.jpg?1";

  // Main Images
  EliImage = "https://i.imgur.com/UyUY5E6.jpg?1";
  UmbraImage = "https://i.imgur.com/VMGyDVE.jpg";
  BucketImage = "https://i.imgur.com/CXTMCHK.jpg";
  BittyImage = "https://i.imgur.com/ZtE60WE.jpg?1";
  WilsonImage = "https://i.imgur.com/PK52q1J.jpg";
  PixieImage = "https://i.imgur.com/686zog1.jpg?1";
  MilkyMooImage = "https://i.imgur.com/xFJ5rGM.jpg?1";

  constructor() {
    setInterval(() => {
      this.EliAge = CardContainerComponent.calculateDateDifference(this.EliBirthday);
      this.UmbraAge = CardContainerComponent.calculateDateDifference(this.UmbraBirthday);
      this.BucketAge = CardContainerComponent.calculateDateDifference(this.BucketBirthday);
      this.BittyAge = CardContainerComponent.calculateDateDifference(this.BittyBirthday);
      this.WilsonAge = CardContainerComponent.calculateDateDifference(this.WilsonBirthday);
      this.PixieAge = CardContainerComponent.calculateDateDifference(this.PixieBirthday);
      this.MilkyMooAge = CardContainerComponent.calculateDateDifference(this.MilkyMooBirthday);
    }, 990);
  }

  ngOnInit() {
  }

  static calculateDateDifference(birthday: Date){
    // get the total time from today to the birth date
    let today = new Date();
    // @ts-ignore
    let msDifference = today - birthday;
    let secondsDifference = msDifference / 1000;
    let years = Math.floor(secondsDifference / 31536000);
    let days = Math.floor((secondsDifference % 31536000) / 86400);
    let hours = Math.floor(((secondsDifference % 31536000) % 86400) / 3600);
    let minutes = Math.floor((((secondsDifference % 31536000) % 86400) % 3600) / 60);
    let seconds = (((secondsDifference % 31536000) % 86400) % 3600) % 60;
    let weeks = Math.floor(days / 7);
    let adjustedDays = days - (7*weeks);
    if(years < 1){
      return weeks + " weeks, " + adjustedDays + " days, " + hours + " hours, " + minutes + " minutes, " + " and " + Math.floor(seconds) + " seconds old"
    } else {
      return years + " years, " + weeks + " weeks, " + adjustedDays + " days, " + hours + " hours, " + minutes + " minutes, " + " and " + Math.floor(seconds) + " seconds old"
    }
  }
}
