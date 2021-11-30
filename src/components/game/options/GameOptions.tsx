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

export default function GameOptions(): ReactElement | null {
  const parsed: NounsObject = conjugations;
  const keys: string[] = Object.keys(parsed.nouns);

  return (
    <main className="w-full   max-h-96 overflow-y-auto bg-gray-100 rounded-2xl shadow-l text-gray-800 p-4">
      <div className="lg:flex  gap-5 text-2xl justify-center">
        {keys.map((item) => {
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
    </main>
  );
}
