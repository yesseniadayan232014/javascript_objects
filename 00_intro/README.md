# OBJETOS EN JAVASCRIPT

Hemos visto los objetos primitivos 
de Javascript como :

  - Numbers
  - Booleans
  - Strings
  - Symbols
  - Null
  - Undefined

  Otros elementos de Javascript muy 
  utilizados, pero que no son primitivos,
  ya que tienen "superpoderes" (metodos)
  son :

  - Arreglos
  - Objetos

  Ejemplos :
  ```Javascript
  var arr = []
  var obj = {}
  ```

  Los arreglos se declaran utilizando corchetes `[]` y los objetos se declaran con llaves `{}`.

  Los arreglos tienen sus elementos ordenados por indices, en cambio los objetos no tienen indices. Sus elementos se rescatan u obtienen mediante
  **llaves**, Ejemplo :

  ```Javascript
  var hero = {
    name = "Thor" ,
    weapon = "martillo" ,
    heir = "rubio" ,
  }
  
  console.log (hero ["name"])
  console.log (hero ["weapon"])
  console.log (hero ["hair"])
  ```

  ```Javascript
  console.log (hero.name)
  console.log (hero.weapon)
  console.log (hero.hair)
  ```
  
  