import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  // TODO - add background, nothing fancy
  eliName = 'Eli';
  eliNickname = 'Mr. Man, Bear, Woofie';
  eliDescription = 'Eli was adopted on July 4th, 2010. He is the most riddled with health issues and has cost too much money over the last 4 years, but we love him anyway. He gets along with everyone and loves to chase the others around the house. He’s very vocal and makes the weirdest chirpy noises. He loves grass, catnip, and playing with your hands under blankets. His favorite toy are his “Kitty fun tubes”. He carries it around and cries to it, which gives me a heart attack because it sounds like he’s dying. In mid August 2021, Eli was diagnosed with Sarcoma in his back right leg. On Sept 1st he had it removed and is now a tripaw-d!';
  // May 1st 2010
  eliBirthdate = new Date(2010, 4, 1);
  eliImageSrc = 'https://i.imgur.com/9uYa4LC.jpg';
  eliImageAlt = 'An image of Eli the cat';

  umbraName = 'Umbra';
  umbraNickname = 'Oobie, oobie-ding, Bug, Big Lady, Ooble, Umba';
  umbraDescription = 'Umbra is a big girl! She was actually the runt of her litter, and the only one with short hair. She still has that dense undercoat, but no fluffiness on top. She’s the most awkward when it comes to playing, its’s almost like she doesn’t know how. She yells the most, and is probably the loudest cat. She’s grumpy and has a thing against Wilson, and they constantly are trying to attack each other… but sometimes I think it’s just playing.';
  // December 8, 2015
  umbraBirthdate = new Date(2015, 11, 8);
  umbraImageSrc = 'https://i.imgur.com/Hq23y2e.jpg';
  umbraImageAlt = 'An image of Umbra the cat';

  bucketName = 'Bucket';
  bucketNickname = 'Buxter Brown, Bucky, Wings, Buckaroo, Booker';
  bucketDescription = 'Bucket was brought home on the day of the eclipse! He’s the weirdest one of the group. He has the strangest meow, oddest mannerisms, and is an all-around goofball! He lies to sit leaning against walls which makes him look like a walrus. Fun fact: Bucket has no hip bone! He fell into the tub and broke his femur head clean off, so he had surgery to have it completely removed. You can’t tell in the slightest (and I have his femur head in a container for keeps). He’s also a big fan of grass, and for some reason loves whistling. His favorite toy is his bird on a stick. It jingles when you swing it and he gets so excited. He carries it around and cries to it.';
  //  May 7, 2017
  bucketBirthdate = new Date(2017, 4, 7);
  bucketImageSrc = 'https://i.imgur.com/ZZjSKWb.jpg';
  bucketImageAlt = 'An image of Bucket the cat';

  bittyName = 'Bitty';
  bittyNickname = 'Bitty Loo, Bitty Loo Francis, Boodle, Bitty Ball, Fat Boy, Ittle Bittle Peanut Brittle, Momma Bitty, Bitty Bitty Butthole Licker';
  bittyDescription = 'Bitty is the momma of the house, even though he is a boy. He’s always cleaning someone (including their booty) and loves kittens. He’s super sweet and has the prettiest eyes. They’re so light green, they look white in some lighting. Bitty has a terrible food obsession, which has made him the fattest one in the house. Despite yelling at him, he will hover over someone else until they’re done eating just to devour their food in a bite or two. He’s also a very sensitive boy, and every time you yell at him you can tell he’s sorry, even if he keeps doing it. Bitty’s favorite toy is a worm on a string with a bell. As soon as he hears it jingle he comes running, steals it, and holds it in his mouth so no one else can play with it.';
  // August 22, 2017
  bittyBirthdate = new Date(2017, 7, 22);
  bittyImageSrc = 'https://i.imgur.com/ZBYUwmF.jpg';
  bittyImageAlt = 'An image of Bitty the cat';

  wilsonName = 'Wilson';
  wilsonNickname = 'Wees, Weenie, Wheat Thins, Willy, Willyson, Weeson, Wesson, One-Eyed Willy';
  wilsonDescription = 'Wilson was born with his one eye not opened properly. It never really affected him though, so there was no need to have anything done to it. Wilson is an absolute snuggle bug. He loves to sit on your lap while you’re working at the computer or watching TV. He will beg for kisses by smashing his head into your face. He loves to go out on the deck and enjoy the sunshine. Him and Umbra have some weird nemesis thing going on, and he’s constantly following her around just to drive her nuts. Wilson’s favorite toy is a broken one, where only the stick remains. He loves to chase just the stick… for some reason.';
  // April 27, 2018
  wilsonBirthdate = new Date(2018, 3, 27);
  wilsonImageSrc = 'https://i.imgur.com/lW3ZpoF.jpg';
  wilsonImageAlt = 'An image of Wilson the cat';

  pixieName = 'Pixie';
  pixieNickname = 'Pete, P, Pix, Puddles, Pizza';
  pixieDescription = 'Pixie was found in a dirty shed looking HORRIBLE. She had severe infections in both eyes and an Upper Respiratory Infection. She pulled through and managed to have both eyes intact but with bad scarring on both. Fast forward to a few months later, and her one eye had deflated. She had to have it completely removed as to not worry about infections in the future. She has never let her partial blindness stop her! She runs into things here and there, but she can get to the top of the cat tree and on the kitchen island no problem. She loves water and is always begging for you to turn the sink on for her. Her favorite toy is a fuzzy mylar crinkle ball, and she loves putting them in the water bowl.';
  // April 19, 2019
  pixieBirthdate = new Date(2019, 3, 19);
  pixieImageSrc = 'https://i.imgur.com/7Z5UHr3.jpg';
  pixieImageAlt = 'An image of Pixie the cat';

  milkName = 'Milky Moo';
  milkNickname = 'Milk, MooMoo';
  milkDescription = 'Milk loves legs! She constantly wants to sit on your thigh and purr up a storm. She’s the smallest cat, weighing a whole 8lbs. She randomly gets the zoomies, and will just start sprinting across the house stopping to make the funniest poses. She knows her name very well and will come when you call her, but not without chirping a bunch first! Her favorite toy is her hedgehog (AKA Hedgie) and she loves to throw it in the air to herself and catch it over and over again.';
  // May 27, 2019
  milkBirthdate = new Date(2019, 4, 27);
  milkImageSrc = 'https://i.imgur.com/Da85dX9.jpg';
  milkImageAlt = 'An image of Milk the cat';

  bonesName = 'Bones';
  bonesNickname = 'Boone, Booner, Chicken Bone, Bo-Bones';
  bonesDescription = 'Bones was found right down the street from our house. He was only about 5 or 6 weeks old. When he was found he was covered in fleas, and so, so skinny (hence his name). Bones is the biggest chicken, and doesn’t like meeting new people. He is the biggest momma’s boy ever. He likes to jam his face into her neck and knead her. He has the tiniest meow, and is almost sounds like he’s crying when he does. He is not a huge fan of canned food, or treats, and only nibbles on his dry food. Bones was a foster fail, with initially no intention on keeping him, he became besties with Milk and we couldn’t let his weirdness leave. Bones’ favorite toys are feet with socks on them and his leather tassel toy . He loves to play tug of war with it like a dog.';
  // September 9, 2019
  bonesBirthdate = new Date(2019, 8, 9);
  bonesImageSrc = 'https://i.imgur.com/rvWHEAo.jpg';
  bonesImageAlt = 'An image of Bones the cat';

  wobblesName = 'Wobbles';
  wobblesNickname = 'Weebs, Wobbs, Weebledy Wobbldy Woo, Double W, Bob, Bobble';
  wobblesDescription = 'Weeble is the newest addition after a 2nd foster fail. We believe he has Cerebellar Hypoplasia, and he occasionally runs around looking like a little drunkard. He falls over from standing sometimes, and his head shakes. He was found feral with his sister at around 6 weeks old. He’s finally coming around, but it’s been a slow process. He still runs when you approach him too quickly, or if he thinks you might grab him. So far his favorite toy might be anything that moves.';
  // November 24th, 2020
  wobblesBirthdate = new Date(2020, 10, 24);
  wobblesImageSrc = 'https://i.imgur.com/Gh5x6y9.jpg';
  wobblesImageAlt = 'An image of Wobbles the cat';

  pancakeName = 'Pancake';
  pancakeNickname = 'Cake, Panko Bread Crumbs, Hanky Panky, Hey-get-back-here-let-me-pet-you';
  pancakeDescription = 'Along with Wobbles, Pancake is the newest addition after a 2nd foster fail. She absolutely loves the other cats, seeking them out and following them around until they give her attention. She was found feral with her brother at around 6 weeks old. She\'s very afraid of being picked up, but will let you pet her if you\'re slow and careful. She loves to make little chirps, and will cry for your attention... but don\'t touch her! She will roll around and "flirt" with you, but trot away as soon as you get close. She\'s a sucker for Churu tubes though!';
  // November 24th, 2020
  pancakeBirthdate = new Date(2020, 10, 24);
  pancakeImageSrc = 'https://i.imgur.com/QdsghFM.jpg';
  pancakeImageAlt = 'An image of Pancake the cat';

  constructor() { }

  ngOnInit(): void {
  }

}
