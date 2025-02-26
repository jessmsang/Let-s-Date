import * as icon from "../utils/images.js";

const initialCards = [
  {
    title: "Living room slumber party",
    icon: "https://media.gettyimages.com/id/91805634/vector/two-little-girls-talking-in-bed.jpg?s=612x612&w=0&k=20&c=psY-DLL-EqhUT-SPo7Ruf2B2HDcppDUkN8M2ySq9Ej8=",
    description:
      "Move your mattress to your living room and enjoy a slumber party! Movies, snacks, pillow fights - whatever your heart desires!",
  },
  {
    title: "Homemade dumplings",
    icon: "https://media.gettyimages.com/id/1328209196/vector/potstickers-on-a-platter.jpg?s=612x612&w=0&k=20&c=y0BQtZhjmdjZjvqqczNQw9tieZ8uow0Jm6dIbHHVtjo=",
    description:
      "Find a recipe online and make some homemade dumplings of your choosing!",
  },
  {
    title: "Homemade spring rolls",
    icon: "https://img.freepik.com/premium-vector/fried-spring-rolls-lumpia-vector_606715-2.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description: "Find a recipe online and make some homemade spring rolls!",
  },
  {
    title: "At-home karaoke night or jam sesh",
    icon: "https://media.gettyimages.com/id/1161177649/vector/pop-music-microphone-icon.jpg?s=612x612&w=0&k=20&c=jnewb7hWMVjbwukKYhzbfBYlXq70XSRpif2nwek3xa0=",
    description:
      "Pull out your guitar, piano, or even your TV and enjoy a night in of singing with your boo!",
  },
  {
    title: "Cook a meal from one of your travels",
    icon: "https://img.freepik.com/free-vector/world-food-day-concept-design_1308-116044.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description:
      "Think of a meal you both really enjoyed during one of your travels and try to recreate it!",
  },
  {
    title: "Baking Roulette",
    icon: "https://media.gettyimages.com/id/458061427/vector/baking-ingredients-illustration.jpg?s=612x612&w=0&k=20&c=wEC8OkftgFZxRCXGgXWI3QApgD0JuCkLkjXzB-bcrR8=",
    description:
      "Use a baking cookbook, website, or instagram account and randomly select something for the two of you to bake together!",
  },
  {
    title: "Read a book together",
    icon: "https://media.gettyimages.com/id/1215979835/vector/couple-reading-books-on-large-book.jpg?s=612x612&w=0&k=20&c=NeHhW9dBH73xjwcCHXfizDQX6ChGE1o8bt0BLQ-T52A=",
    description:
      "A book club for two. Bonus points if you select a book that will challenge you to grow together (i.e. Brené Brown).",
  },
  {
    title: "Puzzle night",
    icon: "https://img.freepik.com/free-vector/autism-puzzless-illustration_24908-82177.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description:
      "Start a puzzle together! This may take more than one, or even two, nights.",
  },
  {
    title: "Game night",
    icon: "https://img.freepik.com/free-vector/board-game-collection_23-2148700964.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description:
      "Pick a game and either enjoy it between the two of you, or turn it into a double or triple date!",
  },
  {
    title: "Video game night",
    icon: "https://img.freepik.com/premium-vector/vector-gamepad-controller-vector-illustration_840648-208.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description: "Pick a co-op video game to play together.",
  },
  {
    title: "Fondue night",
    icon: "https://media.gettyimages.com/id/1125518961/vector/chocolate-fondue-icon.jpg?s=612x612&w=0&k=20&c=JCzoJ6RkIp9erutRksFz5f0JqX1gKQBMYZBe0Hs1M-E=",
    description:
      "This fondue night can be savory or sweet - or both! Make cheese fondue or chocolate fondue together!",
  },
  {
    title: "Backyard BBQ for Two",
    icon: "https://img.freepik.com/free-vector/hand-drawn-garden-party-illustration-design_23-2149594790.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description:
      "Enjoy a backyard party for two! Put on some tunes, grill out, play a backyard game of choice (i.e. cornhole), and enjoy some time outside in the comfort of your own home!",
  },
  {
    title: "Patio coffee date",
    icon: "https://media.gettyimages.com/id/1391434343/vector/coffee-time.jpg?s=612x612&w=0&k=20&c=qqMHqXtHjZg_EIDedpGS6nboJ8Gqr95FUbf_nVhJdjw=",
    description:
      "Choose a morning to enjoy coffee on your front or back porch together! Make sure to be fully present - make a rule to be phone-free during this time.",
  },
  {
    title: "Homemade pizza",
    icon: "https://img.freepik.com/premium-vector/homemade-dough-preparation-pizza-baking_1323048-95474.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description:
      "This can be as simple or difficult as you please! Pre-made dough, handmade dough - it's up to you! You could even make it a half-half pizza if you like different toppings. But enjoy creating this pizza TOGETHER!",
  },
  {
    title: "Polar Plunge",
    icon: "https://img.freepik.com/free-vector/healthy-lifestyle-cartoon-background-with-man-dipping-into-ice-hole-winter-flat-vector-illustration_1284-75345.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description:
      "Challenge yourselves and try a polar plunge together! You can do this in a body of water of your choosing, or find a local business that provides this service (i.e. a contrast bath).",
  },
  {
    title: "Weekend Camping Trip",
    icon: "https://media.gettyimages.com/id/483259794/vector/campground-in-the-woods.jpg?s=612x612&w=0&k=20&c=qHl_NSszatt-rwHHc0WnNIJJHukMqoipV_mDkA7LVyc=",
    description:
      "Plan a weekend to be in nature together. Tent camp, car camp, hammock camp - as long as you're not indoors! Be one with nature and find beauty in disconnecting from technology.",
  },
  {
    title: "Dress each other for a date",
    icon: "https://img.freepik.com/free-vector/fashion-designer-illustration-with-two-women-clothes_23-2148825523.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description:
      "Dress each other for a night out together! Can be casual, can be fancy - or both if you want to do this more than once!",
  },
  {
    title: "Picnic at sunset",
    icon: "https://img.freepik.com/premium-vector/cute-couple-picnic-sunset-nature-scenery-background-vector-illustration_511716-262.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description:
      "Prepare a picnic and enjoy each other's company while the sun sets.",
  },
  {
    title: "Kiss in the rain",
    icon: "https://img.freepik.com/premium-vector/couple-kissing-lamp-with-word-kiss-it_1250948-454.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description:
      "No Umbrellas! Be spontaneous, be romantic, and go smooch in the pouring rain!",
  },
  {
    title: "Be a tourist in your own city",
    icon: "https://img.freepik.com/premium-vector/hanukkaah-celebrations-holidays_753212-2582.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description:
      "Explore your city together! Pick an activity you know your city to be known for.",
  },
  {
    title: "Zoo day",
    icon: "https://img.freepik.com/premium-vector/zoo-map-with-enclosures-with-animals-outdoor-park-entrance-with-green-bushes-pandas-giraffes_273525-973.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description: "Lean into your inner child and have some fun at the zoo!",
  },
  {
    title: "BYOW - Bring your own wheels",
    icon: "https://img.freepik.com/premium-vector/set-activities_505913-6904.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description:
      "Go biking, skateboarding, rollerskating, or any other form of wheels.",
  },
  {
    title: "Go rock climbing",
    icon: "https://img.freepik.com/free-vector/indoor-rock-climbing-gym_1308-106471.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
    description: "Go rock climbing at a local rock climbing gym.",
  },
  {
    title: "Trader Joe's dinner date",
    icon: "https://img.freepik.com/free-vector/people-buying-food-supermarket-concept-illustration_114360-12342.jpg?ga=GA1.1.1458345701.1740069077&semt=ais_hybrid",
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
      romantic: true/false,
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
    },
    "equipment needed?": true/false,
  },
  */

export default initialCards;
