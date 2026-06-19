// Si no le pongo export, no puedo usar la interface en otro archivo
//Exported variable 'findHeroById' has or is using name 'Hero' from external module "d:/Claudio/_NodeU/NodeU/03-typescript/src/data/heroes" but cannot be named.ts(4023)
export interface Hero {
  id: number;
  name: string;
  owner: string;
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: "Ironman",
    owner: "Marvel",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Batman",
    owner: "DC",
  },
];