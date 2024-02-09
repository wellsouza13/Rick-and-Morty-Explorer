import React, { useRef, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import CharacterCard from "../CharacterCard";
import Loading from "../Loading";

import { fetchCharacters } from "../../services/RickAndMortyAPI";
import {
  Character,
  CharactersContainerProps,
  CharactersResponse,
} from "../../types/CharactersContainerProps";

const CharactersContainer: React.FC<CharactersContainerProps> = ({
  searchTerm,
  onCharacterSelect,
}) => {
  const observer = useRef<IntersectionObserver>();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<CharactersResponse, Error>(
    ["characters", searchTerm],
    fetchCharacters,
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.info.next) {
          try {
            const url = new URL(lastPage.info.next);
            return url.searchParams.get("page");
          } catch (error) {
            console.error("Failed to construct URL:", error);
            return undefined;
          }
        }

        return undefined;
      },
    }
  );

  const lastCharacterRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage || !hasNextPage) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  const handleCharacterSelect = (character: Character) => {
    onCharacterSelect(character);
  };

  if (status === "loading") return <Loading />;
  if (status === "error") return <span>Error: {error?.message}</span>;

  return (
    <div className="flex flex-wrap justify-center">
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.results.map((character, index) => (
            <div
              ref={
                index === page.results.length - 1 ? lastCharacterRef : undefined
              }
              key={character.id}
            >
              <CharacterCard
                name={character.name}
                image={character.image}
                species={character.species}
                onSelect={handleCharacterSelect}
                character={character}
              />
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CharactersContainer;
