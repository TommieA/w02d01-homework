/*

    Boolean             (1 or 0), (true or false)
    String              "Value"
    Data Structure      {"hull", "Laser", true, 4}
    Array               ["Me", "John", "Collin", "Sam"]
    Object              {Name: "Me", Location:"Here"}
    Object              {Name: "Me", Location:"Here", favoriteShows: []}

    const colors = ["red", "yellow", "white", "blue", "purple", "black"];
    let(i = 0; i < colors.length; i++) {
        if (colors[i] === "blue") {
            console.log(i);
        };
    };

    const tommie = {favFood: 'Ice Cream', hobby: 'chess', liveIn: 'Northglenn', favDataType: 'string'};
    console.log(`Tommie's hobby is ${tommie.hobby}!`);

    const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1].name);

inception.limbo = null
console.log(inception.limbo)

