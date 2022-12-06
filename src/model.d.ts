interface IStatus {
  Alive: "Alive";
  Dead: "Dead";
  Unknown: "unknown";
}

type Gender = "Female" | "Male" | "Genderless" | "unknown";

// I know that I shouldn't write it like this, but I wanted to practice the skills
interface IUrl {
  name: string;
  url: string;
}

export interface ICharacter extends IName {
  id: number;
  status: IStatus;
  species: string;
  gender: Gender;
  origin: IUrl;
  location: IUrl;
  image: string;
  episode: string[];
  created: string;
}

interface IPagination {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
