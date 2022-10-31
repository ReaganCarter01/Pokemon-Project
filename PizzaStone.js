class PizzaStone extends GameObject {
  constructor(config) {
    super(config);
    this.sprite = new Sprite({
      gameObject: this,
      src: "/images/characters/pizza-stone.png",
      animations: {
        "used-down"   : [ [1,0] ],
        "unused-down" : [ [0,0] ],
      },
      currentAnimation: "used-down"
    });
    this.storyFlag = config.storyFlag;
    this.pizzas = config.pizzas;
    console.log(this.storyFlag)
    this.talking = [
      {
        required: [this.storyFlag],
        events: [
          { type: "textMessage", text: "You have already used this." },
        ]
      },
      {
        events: [
          { type: "textMessage", text: "Placing Pokemon Stone..." },
          { type: "craftingMenu", pizzas: this.pizzas },
          { type: "addStoryFlag", flag: this.storyFlag },
        ]
      }
    ]

  }

  update() {
   this.sprite.currentAnimation = playerState.storyFlags[this.storyFlag]
    ? "used-down"
    : "unused-down";
  }

}