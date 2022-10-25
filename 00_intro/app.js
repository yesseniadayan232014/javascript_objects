var hero = {
    name: "Chapulin",
    weapon: "Chipote Chillon",
    hair: "Antenas",

    Iam: function () {
        return "Soy el " + this.name + " mi arma es " + this.weapon + " y uso mis " + this.hair
    }
}

console.log(hero.name);
console.log(hero.weapon);
console.log(hero.hair);

console.log(hero.Iam());


