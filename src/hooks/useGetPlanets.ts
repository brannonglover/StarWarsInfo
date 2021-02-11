import axios from "axios";

export default async function fetchPlanets(key: string, page: number) {
  const { data } = await axios.get(`http://swapi.dev/api/planets/?page=${page}`);

  return data;
}