export interface INavBarProps {
  setPage: (page: string) => void
}

export interface IPlanet {
  climate: string,
  created: string,
  diameter: string,
  edited: string,
  films: [],
  gravity: string,
  name: string,
  orbital_period: string,
  population: string,
  residents: [],
  rotation_period: string,
  surface_water: string,
  terrain: string,
  url: string
}

export interface IPerson {
  birth_year: string,
  created: string,
  edited: string,
  eye_color: string,
  films: [],
  gender: string
  hair_color: string,
  height: string,
  homeworld: string,
  mass: string,
  name: string,
  skin_color: string,
  species: [],
  starships: [],
  url: string,
  vehicles: []
}