import { CharacterDetailsProps } from "../../types/CharacterDetailsProps";

const CharacterDetails: React.FC<CharacterDetailsProps> = ({
  character,
  onBack,
}) => {
  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-xl shadow-lg overflow-hidden p-5 my-8">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48 rounded-t-xl md:rounded-none md:rounded-l-xl"
            src={character.image}
            alt={character.name}
          />
        </div>
        <div className="p-8 text-white">
          <div className="uppercase tracking-wide text-sm font-semibold">
            {character.species}
          </div>
          <h1 className="block mt-1 text-2xl leading-tight font-bold hover:text-blue-200">
            {character.name}
          </h1>
          <p className="mt-2">
            Descubra mais sobre este personagem e sua jornada no universo de
            Rick and Morty.
          </p>
        </div>
      </div>
      <button
        onClick={onBack}
        className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out transform hover:scale-105"
      >
        Voltar
      </button>
    </div>
  );
};

export default CharacterDetails;
