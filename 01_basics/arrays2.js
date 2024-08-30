const marvel_heroes = ["Thor", "IronMan", "Batman"]
const dc_heroes = ["Superman", "Flash", "Spiderman"]
// marvel_heroes.push(dc_heroes)

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);


