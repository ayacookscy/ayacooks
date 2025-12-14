import { Allergen, MenuSection } from "@/types/menuTypes";

export const menu: Record<string, MenuSection> = {
  stages: {
    name: "Stages",
    items: [
      {
        name: "Flat pita bread, tarama & bottarga",
        allergens: [1, 7],
        price: 5.5,
        lunch: true,
      },
      {
        name: "Hallah brioche bread with tahini and sjüg",
        allergens: [6, 3, 7, 1, 11],
        price: 4.5,
        lunch: true,
      },
      {
        name: "Roasted beetroot salad, seasonal citrus, avocado & purslane",
        allergens: [],
        price: 9,
      },
      {
        name: "Hummus, roasted shiitake mushrooms, green sauce, hazelnut dukkah and oregano",
        allergens: [8, 11, 13],
        price: 10,
        lunch: true,
      },
      {
        name: "Grilled crispy pita filled with mix of cheese, tomato & mango salad",
        allergens: [1, 7],
        price: 12,
        lunch: true,
      },
      {
        name: "Smoked eggplant fritters, aioli, tomato jam & fried sage",
        allergens: [11, 7, 1],
        price: 9,
        lunch: true,
      },
      {
        name: "Fried feta with fermented, pickle and roasted grapes",
        allergens: [7, 11],
        price: 11,
      },
      {
        name: "Green apple salad",
        allergens: [8, 7],
        price: 8,
        lunch: true,
      },
      {
        name: "Roasted seasonal pumpkin, tahini, yogurt, dried anari cheese & trahanas granola",
        allergens: [11, 7, 8],
        price: 10,
        lunch: true,
      },
      {
        name: "Charred cauliflower with tahini, pomegranate, roasted pistachios & dried roses",
        allergens: [11, 8],
        price: 15,
      },
      {
        name: "Sea bream crudo, citrus oil, labneh, pistachio & rose harissa",
        allergens: [4, 7, 1, 8],
        price: 15,
        lunch: true,
      },
      {
        name: "Grilled octopus, aioli, potato and red pepper & tomato salsa",
        allergens: [7, 14],
        price: 23,
        lunch: true,
      },
      {
        name: "BBQ fish — catch of the day",
        allergens: [4, 7],
        price: 26,
        lunch: true,
      },
      {
        name: "Chicken skewer with harissa barbecue sauce & za’atar",
        allergens: [1, 6],
        price: 18,
        lunch: true,
      },
      {
        name: "Kebab Asli on grilled pita, roasted chili & tomatoes, herb salad with tahini & sjüg",
        allergens: [1, 11],
        price: 18,
        lunch: true,
      },
      {
        name: "Black Angus beef short rib, slow-cooked, honey & Green tahini",
        allergens: [6, 11, 1],
        price: 27,
      },
      {
        name: "Za’atar cyprus potatoes cooked two ways",
        allergens: [],
        price: 4,
        lunch: true,
      },
      {
        name: "Seasonal green salad",
        allergens: [],
        price: 4,
        lunch: true,
      },
    ],
  },
  sweetScene: {
    name: "Sweet scene",
    items: [
      {
        name: "Choux stuffed with chocolate mousse, whipped cream & red plums jam",
        allergens: [1, 3, 7],
        price: 10,
      },
      {
        name: "Kaffir leaves pavlova, lemon curd, confit lemons & whipped cream",
        allergens: [3, 7],
        price: 9,
        lunch: true,
      },
      {
        name: "Hallah French toast with seasonal fruit and labneh cream",
        allergens: [1, 3, 7, 11],
        price: 8,
        lunch: true,
      },
    ],
  },
  signature: {
    name: "Signature",
    items: [
      {
        name: "Hibiscus Mango",
        price: 12,
        description:
          "Averna amaro, lillet bianco, homemade hibiscus mango soda, passionfruit and mango sherbet",
      },
      {
        name: "Kiwi Tarragon 0% Alc",
        price: 8,
        description: "Non/Alc Gin, kiwi, tarragon syrup and ascorbic acid",
      },
      {
        name: "Tonka Strawberry Butter 0% Alc",
        price: 5.5,
        description:
          "H₂O Infused tonkaand butter, stravan syrup and magic acid",
      },
      {
        name: "Not Umami",
        price: 12,
        description:
          "Tequila reposado infused with tomato skin, clarified pineapple water, lemongrass and lactic acid",
      },
      {
        name: "Smoked B*tch",
        price: 14,
        description:
          "Mezcal infused peach, homemade peach cordial, apricot and ascorbic acid",
      },
      {
        name: "Spicy Carrot 0% Alc",
        price: 8,
        description:
          "Non/Alc Whiskey infused raisins, whey carrot syrup, tabasco, smoked salt, citric acid and vegan foamer",
      },
      {
        name: "Tahini",
        price: 12,
        description:
          "Rum infused with banana peel, tahini, pandan usamary llifolius, banana milk and lactic acid",
      },
      {
        name: "Kirsch Vodka",
        price: 14,
        description:
          "Vodka infused with date, cherry, yuzu, smoked salt, fermented tabasco with ginger and citric acid",
      },
    ],
  },
  beersCider: {
    name: "Beers/Cider",
    items: [
      {
        name: "The Good Cider",
        price: 8,
        description: "Apple Alc Free 0,33",
      },
      {
        name: "Erdinger Weiss",
        price: 6,
        description: "Alcohol-Free 0,33",
      },
      {
        regularName: "Uiltje",
        name: "Bird of Prey IPA",
        price: 6,
        description: "IPA Alcohol-Free 0,33",
      },
      {
        name: "Πιβο",
        price: 8,
        description: "Lager 5% (Drought Icon) 0,33",
      },
      {
        name: "Hell",
        price: 7,
        description: "Rat Helles Lager 4% 0,33",
      },
      {
        name: "Πιβο",
        price: 8,
        description: "Bavarian Style Weiss 4,5% 0,33",
      },
      {
        regularName: "Basqueland",
        name: "Gilda",
        price: 8,
        description: "Hazy IPA 6,1% 0,33",
      },
      {
        name: "Alea",
        price: 9,
        description: "Brewing Smoky Stout 6% 0,33",
      },
      {
        regularName: "Vocation Brewery",
        name: "Death By Cherries",
        price: 8,
        description: "4,5% 0,33",
      },
    ],
  },
  softDrinks: {
    name: "Soft Drinks",
    items: [
      { description: "Americano", price: 4 },
      { description: "Cappuccino", price: 4 },
      { description: "Flat white", price: 5 },
      { description: "Latte", price: 5 },
      { description: "Freddo Espresso", price: 4 },
      { description: "Freddo Cappuccino", price: 5 },
      { description: "Matcha latte", price: 6 },
      { description: "Tea", price: 5 },
    ],
  },
  coffeeTea: {
    name: "Coffee / Tea",
    items: [
      { description: "Water Still / Sparkling", price: 4 },
      { description: "Kombucha", price: 4 },
      { description: "Sodas & tonics", price: 3 },
      { description: "Classic soft drinks", price: 3 },
      { description: "Fresh citrus juice", price: 5 },
    ],
  },
  wineNonAlcoholic: {
    name: "Non-Alcoholic",
    items: [
      {
        name: "Reichsrat von Buhl",
        description: "/ “Zero Secco” / Riesling, Non-Alcoholic / DEU",
        price: 9,
        bottlePrice: 35,
      },
      {
        name: "Acala / Spritz Style Sparkling Tea",
        description: "/ Kombucha-style Tea / LTU",
        bottlePrice: 30,
      },
    ],
  },
  winePetNatSparkling: {
    name: "Pet-Nat & Sparkling",
    items: [
      {
        name: "Vilmart Cuvée Rubis",
        description: "/ Chardonnay, Pinot Noir / FRA",
        price: 35,
        bottlePrice: 80,
      },
      {
        name: "Vilmart Brut Réserve",
        description: "/ Chardonnay, Pinot Noir / FRA ",
        price: 80,
        bottlePrice: 100,
      },
      {
        name: "Cosmic Vinyaters Fades del Calcari",
        description: "/ Sumoll / ESP",
        descriptionBold: "(N)",
        price: 11,
        bottlePrice: 55,
      },
      {
        name: "Meinklang Epic",
        description: "/ Welschriesling, Grüner Veltliner, Muskat / AUT",
        descriptionBold: "(N)",
        price: 10,
        bottlePrice: 40,
      },
      {
        name: "Anatolikos Pet-Nat",
        description: "/ Assyrtiko, Malagouzia / GRC",
        descriptionBold: "(N)",
        bottlePrice: 48,
      },
    ],
  },
  wineWhite: {
    name: "White",
    items: [
      {
        name: "Anatolikos FineAssyrtiko",
        description: "/ Assyrtiko / GRC",
        bottlePrice: 45,
      },
      {
        name: "Gritsch Riesling",
        description: "/ Steinterrassen / Riesling / AUT",
        price: 9,
        bottlePrice: 45,
      },
      {
        name: "Vouni Panayia",
        description: "/ Spourtiko / CYP",
        descriptionBold: "(N)",
        bottlePrice: 39,
      },
      {
        name: "Partida Creus XL",
        description: "/ Xarel·lo / ESP",
        descriptionBold: "(N)",
        bottlePrice: 60,
      },
      {
        name: "Michael Gindl Flora",
        description: "/ Gelber Muskateller, Riesling, Scheurebe / AUT",
        descriptionBold: "(N)",
        price: 11,
        bottlePrice: 45,
      },
      {
        name: "Chatzivaritis Estate Vre",
        description: "/ Malagouzia / GRC",
        bottlePrice: 50,
      },
      {
        name: "Heinrich Naked White",
        description: "/ Chardonnay, Pinot Blanc, Grüner Veltliner / AUT",
        descriptionBold: "(N)",
        price: 10,
        bottlePrice: 55,
      },
      {
        name: "Domaine des Malandes",
        description: "/ Chablis / Chardonnay / FRA",
        bottlePrice: 55,
      },
      {
        name: "Domaine Serge Laloue",
        description: "/ Sancerre / Sauvignon Blanc / FRA",
        bottlePrice: 55,
      },
    ],
  },
  wineOrange: {
    name: "Orange",
    items: [
      {
        name: "Milan Nestarec OKR",
        description: "/ Chardonnay, Sauvignon, Grüner Veltliner / CZE",
        descriptionBold: "(N)",
        price: 11,
        bottlePrice: 55,
      },
      {
        name: "Xavier Vignon Orange",
        description: "/ Viognier, Vermentino / FRA",
        descriptionBold: "(N)",
        bottlePrice: 35,
      },
      {
        name: "Vouni Panayia Vasilissa Orange",
        description: "/ Vasilissa / CYP",
        descriptionBold: "(N)",
        bottlePrice: 45,
      },
    ],
  },
  wineRose: {
    name: "Rosé",
    items: [
      {
        name: "Colterenzio Lagrein Rosé",
        description: "/ Lagrein / ITA",
        bottlePrice: 40,
      },
      {
        name: "Vouni Panayia Pampela Rosé",
        description: "/ Mavro, Xynisteri / CYP",
        descriptionBold: "(N)",
        price: 8,
        bottlePrice: 30,
      },
      {
        name: "Mahlin–Chryssos Liatiko Rosé",
        description: "/ Liatiko / GRC",
        descriptionBold: "(N)",
        bottlePrice: 35,
      },
    ],
  },
  wineRed: {
    name: "Red",
    items: [
      {
        name: "Baumberger Glow Glow Spätburgunder",
        description: "/ Spätburgunder / DEU",
        descriptionBold: "(N)",
        price: 12,
        bottlePrice: 55,
      },
      {
        name: "Chatzivaritis Estate Carbonic Negoska",
        description: "/ Negoska / GRC",
        descriptionBold: "(N)",
        bottlePrice: 50,
      },
      {
        name: "Frank Cornelissen Susucaru Rosso",
        description: "/ Nerello Mascalese / ITA",
        descriptionBold: "(N)",
        price: 11,
        bottlePrice: 50,
      },
      {
        name: "Matías Riccitelli Kung Fu Malbec",
        description: "/ Malbec / ARG",
        descriptionBold: "(N)",
        price: 13,
        bottlePrice: 60,
      },
      {
        name: "Nine Daughters Xinomavro Single Vineyard",
        description: "/ Xinomavro / GRC",
        bottlePrice: 55,
      },
      {
        name: "Teliani Valley Winery 97 Saperavi Unfiltered",
        description: "/ Saperavi / GEO",
        bottlePrice: 60,
      },
    ],
  },
};

// -------------------------------- Allergen reference ------------------------------

export const allergens: Allergen[] = [
  { id: 1, name: "Cereals containing gluten" },
  { id: 2, name: "Crustaceans" },
  { id: 3, name: "Eggs" },
  { id: 4, name: "Fish" },
  { id: 5, name: "Peanuts" },
  { id: 6, name: "Soybeans" },
  { id: 7, name: "Milk (including lactose)" },
  { id: 8, name: "Nuts" },
  { id: 9, name: "Celery" },
  { id: 10, name: "Mustard" },
  { id: 11, name: "Sesame seeds" },
  { id: 12, name: "Sulphur dioxide / Sulphites" },
  { id: 13, name: "Lupin" },
  { id: 14, name: "Molluscs" },
];
