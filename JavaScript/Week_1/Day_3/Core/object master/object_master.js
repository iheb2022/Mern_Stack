
const pokemon = Object.freeze([
  { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
  { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
  { "id": 9,   "name": "Blastoise",  "types": ["water"] },
  { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
  { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
  { "id": 23,  "name": "Ekans",      "types": ["poison"] },
  { "id": 24,  "name": "Arbok",      "types": ["poison"] },
  { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
  { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
  { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
  { "id": 52,  "name": "Meowth",     "types": ["normal"] },
  { "id": 63,  "name": "Abra",       "types": ["psychic"] },
  { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
  { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
  { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
  { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
  { "id": 98,  "name": "Krabby",     "types": ["water"] },
  { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
  { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
  { "id": 133, "name": "Eevee",      "types": ["normal"] },
  { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
  { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
  { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
  { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// 1
const pkmnid= pokemon.filter(p => p.id % 3 ===0);
console.log(pkmnid)

// 2
const pkmnfire=pokemon.filter(p => p.types.filter(type => type === "fire").length>0)
console.log(pkmnfire)

// 3
const pkmnlength=pokemon.filter(p=>p.types.length>1)
console.log(pkmnlength)

// 4
const pkmnNames=pokemon.map(p=>p.name)
console.log(pkmnNames)

// 5
const pkmnNameId=pokemon.filter(p=>p.id>99).map(p=>p.name)
console.log(pkmnNameId)

// 6
const pkmnpoison=pokemon.filter(p=>p.types.length===1).filter(p=>p.types.filter(type=>type==="poison").length>0).map(p=>p.name)
console.log(pkmnpoison)

// 7
const  pkmnflying=pokemon.filter(p=>p.types[1]==="flying").map(p=>p.types[0])
console.log(pkmnflying)

// 8
const pkmnNormal=pokemon.filter(p => p.types.filter(type => type === "normal").length>0).length  
console.log(pkmnNormal)

// 9
const pkmnExpect=pokemon.filter(p => p.id !=148)
console.log(pkmnExpect)

// 10
const pkmnlist=pokemon.map(p => {
      if (p.id === 35) {
          return {
          ...p,
          
          types: p.types.map(type => type === "normal" ? "fairy" : type)
          };
      }
      return p;
  });
console.log(pkmnlist)
