import axios from "axios";

export default async function useGetPeople() {
  const { data } = await axios.get("https://swapi.dev/api/people/");

  return data;
}