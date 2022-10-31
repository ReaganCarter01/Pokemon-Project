window.PokemonTypes = {
  normal: "normal",
  spicy: "spicy",
  veggie: "veggie",
  fungi: "fungi",
  chill: "chill",
}

window.Pizzas = {
  "s001": {
    name: "Cursed Gastly",
    description: "Pizza desc here",
    type: PokemonTypes.spicy,
    src: "/images/characters/pizzas/s001.png",
    icon: "/images/icons/spicy.png",
    actions: [ "clumsyStatus", "damage1" ],
  },
  "s002": {
    name: "Bacon Brigade",
    description: "A salty warrior who fears nothing",
    type: PokemonTypes.spicy,
    src: "/images/characters/pizzas/s002.png",
    icon: "/images/icons/spicy.png",
    actions: [ "damage1", "saucyStatus", "clumsyStatus" ],
  },
  "v001": {
    name: "Call Me Kale",
    description: "Pizza desc here",
    type: PokemonTypes.veggie,
    src: "/images/characters/pizzas/v001.png",
    icon: "/images/icons/veggie.png",
    actions: [ "damage1" ],
  },
  "v002": {
    name: "Golden Chansey",
    description: "Pizza desc here",
    type: PokemonTypes.veggie,
    src: "/images/characters/pizzas/goldenchansey.png",
    icon: "/images/icons/veggie.png",
    actions: [ "damage1" ],
  },
  "f001": {
    name: "Portobello Express",
    description: "Pizza desc here",
    type: PokemonTypes.fungi,
    src: "/images/characters/pizzas/f001.png",
    icon: "/images/icons/fungi.png",
    actions: [ "damage1" ],
  },
  "f002": {
    name: "Shadow Bulbasaur",
    description: "Details about this Pokemon are unknown.",
    type: PokemonTypes.fungi,
    src: "/images/characters/pizzas/shadowbulbsaur.png",
    icon: "/images/icons/fungi.png",
    actions: [ "damage1" ],
  }
}