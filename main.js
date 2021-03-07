(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tyr/Development/HowOldAreMyCats/cat-site/src/main.ts */"zUnb");


/***/ }),

/***/ "0btM":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _instagramfeed_instagramfeed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../instagramfeed/instagramfeed.component */ "RTyq");
/* harmony import */ var _catcard_catcard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../catcard/catcard.component */ "MBPw");




class ContentComponent {
    constructor() {
        // TODO - add background, nothing fancy
        this.eliName = 'Eli';
        this.eliNickname = 'Mr. Man, Bear, Woofie';
        this.eliDescription = 'Eli was adopted on July 4th, 2010. He is the most riddled with health issues and has cost too much money over the last 4 years, but we love him anyway. He gets along with everyone and loves to chase the others around the house. He’s very vocal and makes the weirdest chirpy noises. He loves grass, catnip, and playing with your hands under blankets. His favorite toy are his “Kitty fun tubes”. He carries it around and cries to it, which gives me a heart attack because it sounds like he’s dying.';
        // May 1st 2010
        this.eliBirthdate = new Date(2010, 4, 1);
        this.eliImageSrc = 'https://i.imgur.com/9uYa4LC.jpg';
        this.eliImageAlt = 'An image of Eli the cat';
        this.umbraName = 'Umbra';
        this.umbraNickname = 'Oobie, oobie-ding, Bug, Big Lady, Ooble, Umba';
        this.umbraDescription = 'Umbra is a big girl! She was actually the runt of her litter, and the only one with short hair. She still has that dense undercoat, but no fluffiness on top. She’s the most awkward when it comes to playing, its’s almost like she doesn’t know how. She yells the most, and is probably the loudest cat. She’s grumpy and has a thing against Wilson, and they constantly are trying to attack each other… but sometimes I think it’s just playing.';
        // December 8, 2015
        this.umbraBirthdate = new Date(2015, 11, 8);
        this.umbraImageSrc = 'https://i.imgur.com/Hq23y2e.jpg';
        this.umbraImageAlt = 'An image of Umbra the cat';
        this.bucketName = 'Bucket';
        this.bucketNickname = 'Buxter Brown, Bucky, Wings, Buckaroo';
        this.bucketDescription = 'Bucket was brought home on the day of the eclipse! He’s the weirdest one of the group. He has the strangest meow, oddest mannerisms, and is an all-around goofball! He lies to sit leaning against walls which makes him look like a walrus. Fun fact: Bucket has no hip bone! He fell into the tub and broke his femur head clean off, so he had surgery to have it completely removed. You can’t tell in the slightest (and I have his femur head in a container for keeps). He’s also a big fan of grass, and for some reason loves whistling. His favorite toy is his bird on a stick. It jingles when you swing it and he gets so excited. He carries it around and cries to it.';
        //  May 7, 2017
        this.bucketBirthdate = new Date(2017, 4, 7);
        this.bucketImageSrc = 'https://i.imgur.com/ZZjSKWb.jpg';
        this.bucketImageAlt = 'An image of Bucket the cat';
        this.bittyName = 'Bitty';
        this.bittyNickname = 'Bitty Loo, Bitty Loo Francis, Bitty Ball, Fat Boy, Ittle Bittle Peanut Brittle, Momma Bitty, Bitty Bitty Butthole Licker';
        this.bittyDescription = 'Bitty is the momma of the house, even though he is a boy. He’s always cleaning someone (including their booty) and loves kittens. He’s super sweet and has the prettiest eyes. They’re so light green, they look white in some lighting. Bitty has a terrible food obsession, which has made him the fattest one in the house. Despite yelling at him, he will hover over someone else until they’re done eating just to devour their food in a bite or two. He’s also a very sensitive boy, and every time you yell at him you can tell he’s sorry, even if he keeps doing it. Bitty’s favorite toy is a worm on a string with a bell. As soon as he hears it jingle he comes running, steals it, and holds it in his mouth so no one else can play with it.';
        // August 22, 2017
        this.bittyBirthdate = new Date(2017, 7, 22);
        this.bittyImageSrc = 'https://i.imgur.com/ZBYUwmF.jpg';
        this.bittyImageAlt = 'An image of Bitty the cat';
        this.wilsonName = 'Wilson';
        this.wilsonNickname = 'Wees, Weenie, Wheat Thins, Willy, Willyson, Weeson, Wesson, One-Eyed Willy';
        this.wilsonDescription = 'Wilson was born with his one eye not opened properly. It never really affected him though, so there was no need to have anything done to it. Wilson is an absolute snuggle bug. He loves to sit on your lap while you’re working at the computer or watching TV. He will beg for kisses by smashing his head into your face. He loves to go out on the deck and enjoy the sunshine. Him and Umbra have some weird nemesis thing going on, and he’s constantly following her around just to drive her nuts. Wilson’s favorite toy is a broken one, where only the stick remains. He loves to chase just the stick… for some reason.';
        // April 27, 2018
        this.wilsonBirthdate = new Date(2018, 3, 27);
        this.wilsonImageSrc = 'https://i.imgur.com/lW3ZpoF.jpg';
        this.wilsonImageAlt = 'An image of Wilson the cat';
        this.pixieName = 'Pixie';
        this.pixieNickname = 'Pete, P, Pix, Puddles, Pizza';
        this.pixieDescription = 'Pixie was found in a dirty shed looking HORRIBLE. She had severe infections in both eyes and an Upper Respiratory Infection. She pulled through and managed to have both eyes intact but with bad scarring on both. Fast forward to a few months later, and her one eye had deflated. She had to have it completely removed as to not worry about infections in the future. She has never let her partial blindness stop her! She runs into things here and there, but she can get to the top of the cat tree and on the kitchen island no problem. She loves water and is always begging for you to turn the sink on for her. Her favorite toy is a fuzzy mylar crinkle ball, and she loves putting them in the water bowl.';
        // April 19, 2019
        this.pixieBirthdate = new Date(2019, 3, 19);
        this.pixieImageSrc = 'https://i.imgur.com/7Z5UHr3.jpg';
        this.pixieImageAlt = 'An image of Pixie the cat';
        this.milkName = 'Milky Moo';
        this.milkNickname = 'Milk, MooMoo';
        this.milkDescription = 'Milk loves legs! She constantly wants to sit on your thigh and purr up a storm. She’s the smallest cat, weighing a whole 8lbs. She randomly gets the zoomies, and will just start sprinting across the house stopping to make the funniest poses. She knows her name very well and will come when you call her, but not without chirping a bunch first! Her favorite toy is her hedgehog (AKA Hedgie) and she loves to throw it in the air to herself and catch it over and over again.';
        // May 27, 2019
        this.milkBirthdate = new Date(2019, 4, 27);
        this.milkImageSrc = 'https://i.imgur.com/Da85dX9.jpg';
        this.milkImageAlt = 'An image of Milk the cat';
        this.bonesName = 'Bones';
        this.bonesNickname = 'Boone, Booner, Chicken Bone';
        this.bonesDescription = 'Bones was found right down the street from our house. He was only about 5 or 6 weeks old. When he was found he was covered in fleas, and so, so skinny (hence his name). Bones is the biggest chicken, and doesn’t like meeting new people. He is the biggest momma’s boy ever. He likes to jam his face into her neck and knead her. He has the tiniest meow, and is almost sounds like he’s crying when he does. He is not a huge fan of canned food, or treats, and only nibbles on his dry food. Bones was a foster fail, with initially no intention on keeping him, he became besties with Milk and we couldn’t let his weirdness leave. Bones’ favorite toy is his leather tassel toy. He loves to play tug of war with it like a dog.';
        // September 9, 2019
        this.bonesBirthdate = new Date(2019, 8, 9);
        this.bonesImageSrc = 'https://i.imgur.com/rvWHEAo.jpg';
        this.bonesImageAlt = 'An image of Bones the cat';
        this.wobblesName = 'Wobbles';
        this.wobblesNickname = 'Weebs, wobbs, Weebledy Wobbldy Woo';
        this.wobblesDescription = 'Weeble is the newest addition after a 2nd foster fail. We believe he has Cerebellar Hypoplasia, and he occasionally runs around looking like a little drunkard. He falls over from standing sometimes, and his head shakes. He was found feral with his sister at around 6 weeks old. He’s finally coming around, but it’s been a slow process. He still runs when you approach him too quickly, or if he thinks you might grab him. So far his favorite toy might be anything that moves.';
        // November 24th, 2020
        this.wobblesBirthdate = new Date(2020, 10, 24);
        this.wobblesImageSrc = 'https://i.imgur.com/0SIhMpU.jpg';
        this.wobblesImageAlt = 'An image of Wobbles the cat';
        this.pancakeName = 'Pancake';
        this.pancakeNickname = 'Cake, Panko Bread Crumbs, Hanky Panky, Hey-get-back-here-let-me-pet-you';
        this.pancakeDescription = 'Along with Wobbles, Pancake is the newest addition after a 2nd foster fail. She absolutely loves the other cats, seeking them out and following them around until they give her attention. She was found feral with her brother at around 6 weeks old. She\'s very afraid of being picked up, but will let you pet her if you\'re slow and careful. She loves to play and is always chirping.';
        // November 24th, 2020
        this.pancakeBirthdate = new Date(2020, 10, 24);
        this.pancakeImageSrc = 'https://i.imgur.com/zpnU0AK.jpg';
        this.pancakeImageAlt = 'An image of Pancake the cat';
    }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 30, vars: 60, consts: [["fxLayoutAlign", "center", "fxLayout", "row", "fxLayout.lt-lg", "column"], ["fxLayout", "row", "fxLayoutAlign", "center", "fxFlex", "20%"], ["fxLayout", "column", "fxFlex", "60%"], ["fxLayout", "row", "fxLayout.lt-lg", "column"], ["fxFlex", "50%", "fxLayoutAlign", "center"], [3, "catName", "catNickname", "catDescription", "catBirthdate", "cardImageSrc", "cardImageAlt"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-instagramfeed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-catcard", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-catcard", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-catcard", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-catcard", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-catcard", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-catcard", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-catcard", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-catcard", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-catcard", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-catcard", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("catName", ctx.eliName)("catNickname", ctx.eliNickname)("catDescription", ctx.eliDescription)("catBirthdate", ctx.eliBirthdate)("cardImageSrc", ctx.eliImageSrc)("cardImageAlt", ctx.eliImageAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("catName", ctx.umbraName)("catNickname", ctx.umbraNickname)("catDescription", ctx.umbraDescription)("catBirthdate", ctx.umbraBirthdate)("cardImageSrc", ctx.umbraImageSrc)("cardImageAlt", ctx.umbraImageAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("catName", ctx.bittyName)("catNickname", ctx.bittyNickname)("catDescription", ctx.bittyDescription)("catBirthdate", ctx.bittyBirthdate)("cardImageSrc", ctx.bittyImageSrc)("cardImageAlt", ctx.bittyImageAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("catName", ctx.bucketName)("catNickname", ctx.bucketNickname)("catDescription", ctx.bucketDescription)("catBirthdate", ctx.bucketBirthdate)("cardImageSrc", ctx.bucketImageSrc)("cardImageAlt", ctx.bucketImageAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("catName", ctx.wilsonName)("catNickname", ctx.wilsonNickname)("catDescription", ctx.wilsonDescription)("catBirthdate", ctx.wilsonBirthdate)("cardImageSrc", ctx.wilsonImageSrc)("cardImageAlt", ctx.wilsonImageAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("catName", ctx.pixieName)("catNickname", ctx.pixieNickname)("catDescription", ctx.pixieDescription)("catBirthdate", ctx.pixieBirthdate)("cardImageSrc", ctx.pixieImageSrc)("cardImageAlt", ctx.pixieImageAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("catName", ctx.milkName)("catNickname", ctx.milkNickname)("catDescription", ctx.milkDescription)("catBirthdate", ctx.milkBirthdate)("cardImageSrc", ctx.milkImageSrc)("cardImageAlt", ctx.milkImageAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("catName", ctx.bonesName)("catNickname", ctx.bonesNickname)("catDescription", ctx.bonesDescription)("catBirthdate", ctx.bonesBirthdate)("cardImageSrc", ctx.bonesImageSrc)("cardImageAlt", ctx.bonesImageAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("catName", ctx.wobblesName)("catNickname", ctx.wobblesNickname)("catDescription", ctx.wobblesDescription)("catBirthdate", ctx.wobblesBirthdate)("cardImageSrc", ctx.wobblesImageSrc)("cardImageAlt", ctx.wobblesImageAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("catName", ctx.pancakeName)("catNickname", ctx.pancakeNickname)("catDescription", ctx.pancakeDescription)("catBirthdate", ctx.pancakeBirthdate)("cardImageSrc", ctx.pancakeImageSrc)("cardImageAlt", ctx.pancakeImageAlt);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _instagramfeed_instagramfeed_component__WEBPACK_IMPORTED_MODULE_2__["InstagramfeedComponent"], _catcard_catcard_component__WEBPACK_IMPORTED_MODULE_3__["CatcardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "5Lta":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");


class TopbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(); };
TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], decls: 7, vars: 0, consts: [["color", "primary"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Meet our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Eight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Nine cats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RvcGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJ0b3BiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MBPw":
/*!**********************************************!*\
  !*** ./src/app/catcard/catcard.component.ts ***!
  \**********************************************/
/*! exports provided: CatcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatcardComponent", function() { return CatcardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "PDjf");



class CatcardComponent {
    constructor() {
        this.catName = '';
        this.catNickname = '';
        this.catDescription = '';
        this.catBirthdate = new Date();
        this.cardImageSrc = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
        this.cardImageAlt = 'Placeholder image of a Shiba Inu';
        this.catAge = '';
        this.catBirthday = '';
    }
    ngOnInit() {
        this.catBirthday = this.catBirthdate.toDateString();
        // Loop through fully and calculate for exact age
        const testMonths = this.countMonths(this.catBirthdate);
        const years = Math.floor(testMonths / 12);
        const months = testMonths % 12;
        if (years === 0) {
            if (months === 1) {
                this.catAge = months + ' month old';
            }
            else {
                this.catAge = months + ' months old';
            }
        }
        else {
            let displayString = '';
            if (years === 1) {
                displayString = displayString + years + ' year';
            }
            else {
                displayString = displayString + years + ' years';
            }
            if (months === 0) {
                displayString = displayString + ' old';
            }
            else if (months === 1) {
                displayString = displayString + ' ' + months + ' month old';
            }
            else {
                displayString = displayString + ' ' + months + ' months old';
            }
            this.catAge = displayString;
        }
    }
    countMonths(birthDate) {
        const stepDate = new Date(birthDate);
        const endDate = new Date(Date.now());
        let monthCount = 0;
        while (stepDate <= endDate) {
            stepDate.setMonth(stepDate.getMonth() + 1);
            monthCount += 1;
        }
        if (stepDate !== endDate) {
            monthCount -= 1;
        }
        return monthCount;
    }
}
CatcardComponent.ɵfac = function CatcardComponent_Factory(t) { return new (t || CatcardComponent)(); };
CatcardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatcardComponent, selectors: [["app-catcard"]], inputs: { catName: "catName", catNickname: "catNickname", catDescription: "catDescription", catBirthdate: "catBirthdate", cardImageSrc: "cardImageSrc", cardImageAlt: "cardImageAlt" }, decls: 14, vars: 7, consts: [["fxLayoutAlign", "center"], ["fxFlex", "90%", "fxFlex.lt-lg", "70%", 1, "margined"], [1, "mat-elevation-z8"], ["mat-card-image", "", 3, "src", "alt"]], template: function CatcardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.catName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.catNickname, " - ", ctx.catAge, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.catBirthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.cardImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.cardImageAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.catDescription, " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]], styles: [".example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.margined[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhdGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtRkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJjYXRjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWFyZ2luZWQge1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xufSJdfQ== */"] });


/***/ }),

/***/ "RTyq":
/*!**********************************************************!*\
  !*** ./src/app/instagramfeed/instagramfeed.component.ts ***!
  \**********************************************************/
/*! exports provided: InstagramfeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramfeedComponent", function() { return InstagramfeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class InstagramfeedComponent {
    constructor() { }
    ngOnInit() {
    }
}
InstagramfeedComponent.ɵfac = function InstagramfeedComponent_Factory(t) { return new (t || InstagramfeedComponent)(); };
InstagramfeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstagramfeedComponent, selectors: [["app-instagramfeed"]], decls: 38, vars: 0, consts: [[1, "spacing"], ["data-instgrm-captioned", "", "data-instgrm-permalink", "https://www.instagram.com/p/CLny2dcn5nP/?utm_source=ig_embed&utm_campaign=loading", "data-instgrm-version", "13", 1, "instagram-media", 2, "background", "#FFF", "border", "0", "border-radius", "3px", "box-shadow", "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", "margin", "1px", "max-width", "540px", "min-width", "326px", "padding", "0", "width", "99.375%", "width", "-webkit-calc(100% - 2px)", "width", "calc(100% - 2px)"], [2, "padding", "16px"], ["href", "https://www.instagram.com/p/CLny2dcn5nP/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "background", "#FFFFFF", "line-height", "0", "padding", "0 0", "text-align", "center", "text-decoration", "none", "width", "100%"], [2, "display", "flex", "flex-direction", "row", "align-items", "center"], [2, "background-color", "#F4F4F4", "border-radius", "50%", "flex-grow", "0", "height", "40px", "margin-right", "14px", "width", "40px"], [2, "display", "flex", "flex-direction", "column", "flex-grow", "1", "justify-content", "center"], [2, "background-color", "#F4F4F4", "border-radius", "4px", "flex-grow", "0", "height", "14px", "margin-bottom", "6px", "width", "100px"], [2, "background-color", "#F4F4F4", "border-radius", "4px", "flex-grow", "0", "height", "14px", "width", "60px"], [2, "padding", "19% 0"], [2, "display", "block", "height", "50px", "margin", "0 auto 12px", "width", "50px"], ["width", "50px", "height", "50px", "viewBox", "0 0 60 60", "version", "1.1", "xmlns", "https://www.w3.org/2000/svg", 0, "xmlns", "xlink", "https://www.w3.org/1999/xlink"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-511.000000, -20.000000)", "fill", "#000000"], ["d", "M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"], [2, "padding-top", "8px"], [2, "color", "#3897f0", "font-family", "Arial,sans-serif", "font-size", "14px", "font-style", "normal", "font-weight", "550", "line-height", "18px"], [2, "padding", "12.5% 0"], [2, "display", "flex", "flex-direction", "row", "margin-bottom", "14px", "align-items", "center"], [2, "background-color", "#F4F4F4", "border-radius", "50%", "height", "12.5px", "width", "12.5px", "transform", "translateX(0px) translateY(7px)"], [2, "background-color", "#F4F4F4", "height", "12.5px", "transform", "rotate(-45deg) translateX(3px) translateY(1px)", "width", "12.5px", "flex-grow", "0", "margin-right", "14px", "margin-left", "2px"], [2, "background-color", "#F4F4F4", "border-radius", "50%", "height", "12.5px", "width", "12.5px", "transform", "translateX(9px) translateY(-18px)"], [2, "margin-left", "8px"], [2, "background-color", "#F4F4F4", "border-radius", "50%", "flex-grow", "0", "height", "20px", "width", "20px"], [2, "width", "0", "height", "0", "border-top", "2px solid transparent", "border-left", "6px solid #f4f4f4", "border-bottom", "2px solid transparent", "transform", "translateX(16px) translateY(-4px) rotate(30deg)"], [2, "margin-left", "auto"], [2, "width", "0px", "border-top", "8px solid #F4F4F4", "border-right", "8px solid transparent", "transform", "translateY(16px)"], [2, "background-color", "#F4F4F4", "flex-grow", "0", "height", "12px", "width", "16px", "transform", "translateY(-4px)"], [2, "width", "0", "height", "0", "border-top", "8px solid #F4F4F4", "border-left", "8px solid transparent", "transform", "translateY(-4px) translateX(8px)"], [2, "display", "flex", "flex-direction", "column", "flex-grow", "1", "justify-content", "center", "margin-bottom", "24px"], [2, "background-color", "#F4F4F4", "border-radius", "4px", "flex-grow", "0", "height", "14px", "margin-bottom", "6px", "width", "224px"], [2, "background-color", "#F4F4F4", "border-radius", "4px", "flex-grow", "0", "height", "14px", "width", "144px"], [2, "color", "#c9c8cd", "font-family", "Arial,sans-serif", "font-size", "14px", "line-height", "17px", "margin-bottom", "0", "margin-top", "8px", "overflow", "hidden", "padding", "8px 0 7px", "text-align", "center", "text-overflow", "ellipsis", "white-space", "nowrap"], ["href", "https://www.instagram.com/p/CLny2dcn5nP/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "color", "#c9c8cd", "font-family", "Arial,sans-serif", "font-size", "14px", "font-style", "normal", "font-weight", "normal", "line-height", "17px", "text-decoration", "none"]], template: function InstagramfeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "blockquote", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " View this post on Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "A post shared by Jade Ashley (@ihaz10cats)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".spacing[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  margin-right: 1%;\n  margin-top: 10%;\n  margin-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2luc3RhZ3JhbWZlZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJpbnN0YWdyYW1mZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNpbmcge1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topbar/topbar.component */ "5Lta");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/content.component */ "0btM");



class AppComponent {
    constructor() {
        this.title = 'cat-site';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-content");
    } }, directives: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__["TopbarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topbar/topbar.component */ "5Lta");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.component */ "0btM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _instagramfeed_instagramfeed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./instagramfeed/instagramfeed.component */ "RTyq");
/* harmony import */ var _catcard_catcard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catcard/catcard.component */ "MBPw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "8Y7J");

// Project Components



// Material Components




// Generic Components




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__["TopbarComponent"],
        _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"],
        _instagramfeed_instagramfeed_component__WEBPACK_IMPORTED_MODULE_9__["InstagramfeedComponent"],
        _catcard_catcard_component__WEBPACK_IMPORTED_MODULE_10__["CatcardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map