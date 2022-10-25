function Hero(name) {
    this.name = name,
        this.sayName = function () {
            return "Mi nombre es  " + this.name
            //return `Mi nombre es $ (this.name)` dos formas de aserlo 
        }
}
//let chapulin = new Hero ("Chapulin")
//let minion = new Hero ("Kevin")
//let minion2 = new Hero ("Stuart")
//let doc = new Hero ("Doctor Nefario")
//let vector = new Hero ("Vector")

//console.log (chapulin.name)
//console.log (minion.name)
//console.log (minion2.name)
//console.log (doc.name)
//console.log (vector.name)
//const names = ["Chapulin" , "Kevin" , "Stuart" , "Doctor Nefario" , "Vector"]

const names = ["Chapulin", "Kevin", "Stuart", "Doctor Nefario", "Vector"]

const heroes = []

//for (let i = 0; i < names.lenght; i++) {
// heroes.push(new Hero(names[i]))
//}

names.forEach((name) => {
    heroes.push(new Hero(name))
})

//console.log(heroes)
heroes.forEach((hero) => {
    console.log(hero.sayName());
})