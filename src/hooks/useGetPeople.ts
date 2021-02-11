import axios from "axios";

export default async function useGetPeople(key: string, page: number) {
  const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`);

  return data;
}