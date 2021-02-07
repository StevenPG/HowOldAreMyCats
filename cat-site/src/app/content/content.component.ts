import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  // TODO - calculate age rounded to nearest year next
  // TODO - add background, nothing fancy
  eliName = "Eli"
  eliNickname = "Little Man"
  eliDescription = "test"
  // May 1st 2010
  eliBirthday = new Date(2010, 4, 1).toDateString()

  umbraName = "Umbra"
  umbraNickname = "Bug"
  umbraDescription = ""
  // December 8, 2015
  umbraBirthday = new Date(2015, 11, 8).toDateString()

  bucketName = "Bucket"
  bucketNickname = "Buck"
  bucketDescription = "";
  //  May 7, 2017
  bucketBirthday = new Date(2017, 4, 7).toDateString()

  bittyName = "Bitty"
  bittyNickname = "Boodaloo"
  bittyDescription = "";
  // August 22, 2017
  bittyBirthday = new Date(2017, 7, 22).toDateString()

  wilsonName = "Wilson"
  wilsonNickname = "Wiz"
  wilsonDescription = "";
  // April 27, 2018
  wilsonBirthday = new Date(2018, 3, 27).toDateString()
  
  pixieName = "Pixie"
  pixieNickname = "Pete/Pizza"
  pixieDescription = "";
  // April 19, 2019
  pixieBirthday = new Date(2019, 3, 19).toDateString()
  
  milkName = "Milk"
  milkNickname = "Mork"
  milkDescription = "";
  // May 27, 2019
  milkBirthday = new Date(2019, 4, 27).toDateString()
  
  bonesName = "Bones"
  bonesNickname = "Boon"
  bonesDescription = "";
  // September 9, 2019
  bonesBirthday = new Date(2019, 8, 9).toDateString()
  
  wobblesName = "Wobbles"
  wobblesNickname = "Weeble-Wobble"
  wobblesDescription = "";
  // November 24th, 2020
  wobblesBirthday = new Date(2020, 10, 24).toDateString()
  

  constructor() { }

  ngOnInit(): void {
  }

}
