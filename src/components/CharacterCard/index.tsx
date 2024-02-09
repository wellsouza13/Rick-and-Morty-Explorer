import { CharacterCardProps } from "../../types/CharacterCardProps";

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  image,
  species,
  onSelect,
  character,
}) => {
  return (
    <div
      onClick={() => onSelect(character)}
      className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-gradient-to-r from-green-400 to-blue-500"
    >
      <img className="w-full" src={image} alt={`Character ${name}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{name}</div>
        <p className="text-gray-200 text-base">Espécie: {species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
