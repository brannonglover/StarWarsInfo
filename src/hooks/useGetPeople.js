import axios from "axios";

export default async function useGetPeople(key, page) {
  const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`);

  return data;
}