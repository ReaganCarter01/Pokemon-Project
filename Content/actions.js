window.Actions = {
  damage1: {
    name: "Tackle",
    description: "An attack that does little damage.",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!"},
      { type: "animation", animation: "spin"},
      { type: "stateChange", damage: 10}
    ]
  },
  saucyStatus: {
    name: "Cursed Heal",
    description: "A move only Cursed Pokemon can do. It heals your Pokemon for 2-4 turns.",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!"},
      { type: "stateChange", status: { type: "saucy", expiresIn: 3 } }
    ]
  },
 // clumsyStatus: {
 //   name: "Olive Oil",
//    description: "Slippery mess of deliciousness",
//    success: [
////      { type: "textMessage", text: "{CASTER} uses {ACTION}!"},
 //     { type: "animation", animation: "glob", color: "#dafd2a" },
//      { type: "stateChange", status: { type: "clumsy", expiresIn: 3 } },
 //     { type: "textMessage", text: "{TARGET} is slipping all around!"},
 //   ]
 // },
  clumsyStatus: {
    name: "Cursed Beam",
    description: "A move only Cursed Pokemon can do. A powerful beam that causes Pokemon to be Cursed.",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!"},
      { type: "animation", animation: "glob", color: "#dafd2a" },
      { type: "stateChange", status: { type: "cursed", expiresIn: 3 } },
      { type: "textMessage", text: "{TARGET} is cursed!"},
      { type: "stateChange", damage: 10}
    ]
  },
  //Items
  item_recoverStatus: {
    name: "Heating Lamp",
    description: "Feeling fresh and warm",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} uses a {ACTION}!"},
      { type: "stateChange", status: null },
      { type: "textMessage", text: "Feeling fresh!", },
    ]
  },
  item_recoverHp: {
    name: "Parmesan",
    targetType: "friendly",
    success: [
      { type:"textMessage", text: "{CASTER} sprinkles on some {ACTION}!", },
      { type:"stateChange", recover: 10, },
      { type:"textMessage", text: "{CASTER} recovers HP!", },
    ]
  },
}