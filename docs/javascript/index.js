const coffeeGridSection = document.querySelector("#coffee-grid-section");
let mainHTML = "";

const data = [
  {
    id: "1",
    name: "Espresso",
    ingredients: {
      water: "30ml",
      coffee: "18g",
    },
    taste: "Strong and rich",
    steps: [
      "Measure 18g of coffee beans and grind them to a fine consistency, similar to table salt.",
      "Place the ground coffee into the portafilter and level it out evenly.",
      "Use a tamper to firmly compress the coffee grounds, ensuring an even surface.",
      "Attach the portafilter to the espresso machine and secure it tightly.",
      "Start the espresso machine and extract a shot of espresso using 30ml of water. This should take around 25-30 seconds.",
      "Pour the espresso shot into a pre-warmed cup and serve immediately to preserve its crema and flavor.",
    ],
    image: "espresso.png",
  },
  {
    id: "2",
    name: "Cappuccino",
    ingredients: {
      espresso: "30ml",
      steamedMilk: "60ml",
      foam: "60ml",
    },
    taste: "Creamy and balanced",
    steps: [
      "Prepare a shot of espresso by following the steps for making an espresso (30ml).",
      "Pour cold milk into a pitcher, filling it about halfway to allow space for frothing.",
      "Steam the milk using a steam wand, keeping the tip just below the surface to create foam.",
      "Once the milk has doubled in volume and is smooth and creamy, turn off the steam wand.",
      "Pour 60ml of steamed milk into the espresso, holding back the foam with a spoon.",
      "Top the drink with 60ml of milk foam by spooning it gently on top.",
      "Serve warm in a pre-warmed cup.",
    ],
    image: "cappuccino.png",
  },
  {
    id: "3",
    name: "Latte",
    ingredients: {
      espresso: "30ml",
      steamedMilk: "150ml",
      foam: "30ml",
    },
    taste: "Smooth and milky",
    steps: [
      "Prepare a shot of espresso by following the steps for making an espresso (30ml).",
      "Pour cold milk into a pitcher, filling it about halfway for steaming.",
      "Steam the milk with a steam wand, submerging the wand tip slightly below the surface for smooth, creamy milk.",
      "Continue steaming until the milk reaches around 60–65°C (140–150°F) and forms a slight layer of foam.",
      "Slowly pour the steamed milk (150ml) into the espresso, tilting the cup to mix them evenly.",
      "Spoon 30ml of milk foam onto the top for a smooth finish.",
      "Serve warm in a latte cup.",
    ],
    image: "latte.png",
  },
  {
    id: "4",
    name: "Americano",
    ingredients: {
      espresso: "30ml",
      hotWater: "90ml",
    },
    taste: "Light and mellow",
    steps: [
      "Prepare a shot of espresso by following the steps for making an espresso (30ml).",
      "Heat 90ml of water in a kettle or microwave until it’s hot but not boiling (around 80–90°C).",
      "Pour the hot water into the cup containing the espresso shot, mixing them gently.",
      "Adjust the ratio of water to espresso according to your taste preference.",
      "Serve immediately in a large cup.",
    ],
    image: "americano.png",
  },
  {
    id: "5",
    name: "Mocha",
    ingredients: {
      espresso: "30ml",
      steamedMilk: "120ml",
      chocolateSyrup: "20ml",
      whippedCream: "optional",
    },
    taste: "Sweet and chocolaty",
    steps: [
      "Prepare a shot of espresso by following the steps for making an espresso (30ml).",
      "Pour 120ml of cold milk into a pitcher and steam it with a steam wand until smooth and slightly frothy.",
      "Mix the espresso shot with 20ml of chocolate syrup in a cup until fully blended.",
      "Pour the steamed milk into the espresso and chocolate mixture, stirring gently.",
      "Optional: Top with whipped cream for extra richness.",
      "Serve warm in a tall glass or mug.",
    ],
    image: "mocha.png",
  },
  {
    id: "6",
    name: "Macchiato",
    ingredients: {
      espresso: "30ml",
      foam: "15ml",
    },
    taste: "Strong with a hint of creaminess",
    steps: [
      "Prepare a shot of espresso by following the steps for making an espresso (30ml).",
      "Use a steam wand to froth a small amount of milk until it forms dense foam.",
      "Spoon 15ml of the milk foam onto the top of the espresso shot.",
      "Serve immediately in a small cup to enjoy the concentrated flavor.",
    ],
    image: "macchiato.png",
  },
  {
    id: "7",
    name: "Flat White",
    ingredients: {
      espresso: "30ml",
      steamedMilk: "90ml",
    },
    taste: "Velvety and rich",
    steps: [
      "Prepare a shot of espresso by following the steps for making an espresso (30ml).",
      "Pour 90ml of cold milk into a pitcher and steam it until it is smooth and velvety, avoiding too much foam.",
      "Tilt the cup slightly and pour the steamed milk over the espresso in a thin, steady stream.",
      "Ensure the milk and espresso blend smoothly for a rich, velvety texture.",
      "Serve warm in a ceramic cup.",
    ],
    image: "flat-white.png",
  },
  {
    id: "8",
    name: "Irish Coffee",
    ingredients: {
      hotCoffee: "120ml",
      irishWhiskey: "30ml",
      brownSugar: "1 tsp",
      whippedCream: "topping",
    },
    taste: "Sweet and boozy",
    steps: [
      "Brew 120ml of hot coffee using your preferred brewing method (e.g., drip, French press, or pour-over).",
      "Pour 30ml of Irish whiskey into a heatproof glass or mug.",
      "Add 1 tsp of brown sugar to the whiskey and stir until the sugar is completely dissolved.",
      "Gently pour the hot coffee into the glass, mixing it with the whiskey and sugar.",
      "Top the drink with a generous dollop of whipped cream, floating it on the surface without mixing.",
      "Serve warm and enjoy responsibly.",
    ],
    image: "irish-coffee.png",
  },
];

function coffeeSection() {
  data.forEach((coffee) => {
    let html = `
        <a href="recipe.html?id=${coffee.id}" class="sm:min-w-80">
            <div class="bg-caramel card rounded-2xl w-full h-max overflow-hidden relative  hover:shadow-brown hover:shadow-2xl flex flex-col justify-center border-4 border-espresso">
                <img
                src="../images/${coffee.image}"
                class="h-80 w-max mx-auto object-cover"
                alt="#"
                />
                <div class="layer w-full h-full bg-cream absolute left-0 top-0">.</div>
                    <div class="pl-5 z-10">
                    <div class="name text-3xl font-semibold">${coffee.name}</div>
                    <div class="semi-name">click to see recipe</div>
                </div>
                <div class="arrow-top-right absolute top-5 right-5">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    >
                    <path
                    fill="currentColor"
                    d="m16.289 7.208l-9.766 9.746q-.14.14-.344.13q-.204-.009-.345-.15t-.14-.334t.14-.334L15.582 6.5H6.789q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h9.692q.343 0 .575.232t.233.576V16q0 .213-.145.356t-.356.144t-.356-.144t-.144-.356z"
                    />
                    </svg>
                </div>
            </div>
        </a>`;

    mainHTML += html;
  });
  coffeeGridSection.innerHTML = mainHTML;
}

coffeeSection();
