import axios from "axios";

export default async function fetchPlanets(key, page) {
  const { data } = await axios.get(`http://swapi.dev/api/planets/?page=${page}`);

  return data;
}