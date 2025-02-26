import * as icon from "../utils/images.js";

const initialCards = [
  {
    title: "Living room slumber party",
    icon: icon.homeIcon + icon.nightIcon,
    description:
      "Move your mattress to your living room and enjoy a slumber party! Movies, snacks, pillow fights - whatever your heart desires!",
  },
  {
    title: "Homemade dumplings",
    icon: icon.cookIcon + icon.homeIcon,
    description:
      "Find a recipe online and make some homemade dumplings of your choosing!",
  },
  {
    title: "Homemade spring rolls",
    icon: icon.cookIcon + icon.homeIcon,
    description: "Find a recipe online and make some homemade spring rolls!",
  },
  {
    title: "At-home karaoke night or jam sesh",
    icon: icon.homeIcon + icon.musicIcon,
    description:
      "Pull out your guitar, piano, or even your TV and enjoy a night in of singing with your boo!",
  },
  {
    title: "Cook a meal from one of your travels",
    icon: icon.cookIcon + icon.homeIcon,
    description:
      "Think of a meal you both really enjoyed during one of your travels and try to recreate it!",
  },
  {
    title: "Baking Roulette",
    icon: icon.cookIcon + icon.homeIcon,
    description:
      "Use a baking cookbook, website, or instagram account and randomly select something for the two of you to bake together!",
  },
  {
    title: "Read a book together",
    icon: icon.readIcon,
    description:
      "A book club for two. Bonus points if you select a book that will challenge you to grow together (i.e. Brené Brown).",
  },
  {
    title: "Puzzle night",
    icon: icon.gameIcon + icon.homeIcon,
    description:
      "Start a puzzle together! This may take more than one, or even two, nights.",
  },
  {
    title: "Game night",
    icon: icon.gameIcon + icon.homeIcon,
    description:
      "Pick a game and either enjoy it between the two of you, or turn it into a double or triple date!",
  },
  {
    title: "Video game night",
    icon: icon.gameIcon + icon.homeIcon,
    description: "Pick a co-op video game to play together.",
  },
  {
    title: "Fondue night",
    icon: icon.cookIcon + icon.homeIcon,
    description:
      "This fondue night can be savory or sweet - or both! Make cheese fondue or chocolate fondue together!",
  },
  {
    title: "Backyard BBQ for Two",
    icon: icon.cookIcon + icon.homeIcon + icon.natureIcon,
    description:
      "Enjoy a backyard party for two! Put on some tunes, grill out, play a backyard game of choice (i.e. cornhole), and enjoy some time outside in the comfort of your own home!",
  },
  {
    title: "Patio coffee date",
    icon: icon.homeIcon + icon.drinkIcon,
    description:
      "Choose a morning to enjoy coffee on your front or back porch together! Make sure to be fully present - make a rule to be phone-free during this time.",
  },
  {
    title: "Homemade pizza",
    icon: icon.cookIcon + icon.homeIcon,
    description:
      "This can be as simple or difficult as you please! Pre-made dough, handmade dough - it's up to you! You could even make it a half-half pizza if you like different toppings. But enjoy creating this pizza TOGETHER!",
  },
  {
    title: "Polar Plunge",
    icon: icon.natureIcon + icon.activeIcon + icon.winterIcon,
    description:
      "Challenge yourselves and try a polar plunge together! You can do this in a body of water of your choosing, or find a local business that provides this service (i.e. a contrast bath).",
  },
  {
    title: "Weekend Camping Trip",
    icon: icon.campingIcon + natureIcon,
    description:
      "Plan a weekend to be in nature together. Tent camp, car camp, hammock camp - as long as you're not indoors! Be one with nature and find beauty in disconnecting from technology.",
  },
  {
    title: "Dress each other for a date",
    icon: icon.fashionIcon + icon.romanticIcon + icon.nightIcon + icon.dayIcon,
    description:
      "Dress each other for a night out together! Can be casual, can be fancy - or both if you want to do this more than once!",
  },
  {
    title: "Picnic at sunset",
    icon: icon.natureIcon + icon.diningIcon,
    description:
      "Prepare a picnic and enjoy each other's company while the sun sets.",
  },
  {
    title: "Kiss in the rain",
    icon: icon.romanticIcon + icon.natureIcon,
    description:
      "Be spontaneous, be romantic, and go do the damn thing! Channel your romantic side and go smooch in the pouring rain.",
  },
  {
    title: "Be a tourist in your own city",
    icon: icon.activeIcon + icon.dayIcon,
    description:
      "Explore your city together! Pick an activity you know your city to be known for.",
  },
  {
    title: "Zoo day",
    icon: icon.activeIcon + icon.natureIcon + icon.dayIcon,
    description: "Lean into your inner child and have some fun at the zoo!",
  },
  {
    title: "BYOW - Bring your own wheels",
    icon: icon.activeIcon + icon.dayIcon,
    description:
      "Go biking, skateboarding, rollerskating, or any other form of wheels",
  },
  {
    title: "Go rock climbing",
    icon: icon.activeIcon,
    description: "Go rock climbing at a local rock climbing gym",
  },
  {
    title: "Trader Joe's dinner date",
    icon:
      icon.shoppingIcon + icon.diningIcon + icon.homeIcon + icon.romanticIcon,
    description:
      "Play rock, paper, scissors to pick each item for a 3-course meal + a beverage.",
  },
];

/* TEMPLATE: 
{
    title: " ",
    description: " ",
    duration: {
      "< 1hr": true/false,
      "1-2 hrs": true/false,
      "3-5 hrs": true/false,
      "6-8 hrs": true/false,
      "1 day": true/false,
      overnight: true/false,
      weekend: true/false,
    },
    location: {
      inside: true/false,
      outside: true/false,
    },
    category: {
      "night-in": true/false,
      "night-out": true/false,
      creative: true/false,
      dining: true/false,
      active: true/false,
      "cheesy but romantic": true/false,
      daytime: true/false,
      entertainment: true/false,
      nature: true/false
    },
    cost: {
    free: true/false,
    "< $10": true/false,
    "< $20": true/false,
    "< $50": true/false,
    "< $100": true/false,
    "> $100": true/false
    },
    season: {
    winter: true/false,
    summer: true/false,
    spring: true/false,
    fall: true/false,
    "all seasons": true/false
    }
    "equipment needed?": true/false,
  },
  */

export default initialCards;
