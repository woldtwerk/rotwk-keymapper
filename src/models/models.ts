// enum Faction {
//   ANGMAR = 'Angmar',
//   DWARFS = 'Dwarfs',
//   ELVES = 'Elves',
//   GOBLINS = 'Goblins',
//   ISENGARD = 'Isengard',
//   MEN = 'Men of the West',
//   MORDOR = 'Mordor',
// }

// enum Category {
//   BUILDING = 'Building',
//   UNIT = 'Unit',
//   HERO = 'Hero'
// }

export interface Data {
  id: string
  name?: string
  category: string
  faction: string
  ref: string
}

export interface KeyMapping {
  id: string
  key: string
}
