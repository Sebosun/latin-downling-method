import { ReactElement } from "react";
import DisplayMore from "./DisplayDeclensions";
import conjugations from "../../../conjugations.json";

export interface NounsObject {
  nouns: {
    first?: NounTypes[];
    second?: NounTypes[];
    third?: NounTypes[];
    fourth?: NounTypes[];
    fifth?: NounTypes[];
  };
}

export interface NounTypes {
  word: string;
  gender: string;
  conjugations: {
    singular: ConjugationTypes;
    plural: ConjugationTypes;
  };
}

export interface ConjugationTypes {
  nominative: string;
  genetive: string;
  dative: string;
  accusative: string;
  ablative: string;
}

export interface PronounsObject {
  demonstratives: Pronoun[];
  interrogatives: Pronoun[];
}

export interface Pronoun {
  name: string;
  masculine: {
    singular: ConjugationTypes;
    plural: ConjugationTypes;
  };
  feminine: {
    singular: ConjugationTypes;
    plural: ConjugationTypes;
  };
  neuter: {
    singular: ConjugationTypes;
    plural: ConjugationTypes;
  };
}

// responsible for displaying all the conjugations available to the user
export default function GameOptions(): ReactElement | null {
  const parsed: NounsObject = conjugations;
  const nounKeys: string[] = Object.keys(parsed.nouns);

  return (
    <>
      <p className="text-xl mx-4 leading-loose">Nouns:</p>
      <div className="flex flex-wrap  gap-5 text-2xl justify-center">
        {nounKeys.map((item) => {
          return (
            <ul>
              <li>
                <DisplayMore
                  name={item}
                  item={parsed.nouns[item as keyof NounsObject["nouns"]]}
                />
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
