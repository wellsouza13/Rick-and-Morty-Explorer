import axios from "axios";
import { QueryFunctionContext } from "react-query";
import { CharactersResponse } from "../types/CharactersContainerProps";

export async function fetchCharacters(
  context: QueryFunctionContext
): Promise<CharactersResponse> {
  const searchTerm = context.queryKey[1] as string;
  const pageParam = context.pageParam ?? "";

  const response = await axios.get<CharactersResponse>(
    `https://rickandmortyapi.com/api/character/?name=${searchTerm}&page=${pageParam}`
  );
  return response.data;
}
