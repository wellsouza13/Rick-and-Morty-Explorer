import React, { useState } from "react";
import Header from "../../components/Header";
import CharactersContainer from "../../components/CharactersContainer";
import CharacterDetails from "../../components/CharacterDetails";
import { Character } from "../../types/CharactersContainerProps";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentStep, setCurrentStep] = useState("list");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const showCharacterDetails = (character: Character) => {
    setSelectedCharacter(character);
    setCurrentStep("details");
  };

  const goBackToList = () => {
    setCurrentStep("list");
  };

  return (
    <div>
      <Header onSearch={(term) => setSearchTerm(term)} />
      <div className="pt-20">
        {currentStep === "list" && (
          <CharactersContainer
            onCharacterSelect={showCharacterDetails}
            searchTerm={searchTerm}
          />
        )}
        {currentStep === "details" && selectedCharacter && (
          <CharacterDetails
            character={selectedCharacter}
            onBack={goBackToList}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
