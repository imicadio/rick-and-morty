export type IStatus = "Alive" | "Dead" | "unknown";

export type Gender = "Female" | "Male" | "Genderless" | "unknown";

// I know that I shouldn't write it like this, but I wanted to practice the skills
export interface IUrl {
  name: string;
  url: string;
}

export interface ICharacter extends IUrl {
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

export interface ITableHeader {
  name: string;
  species: string;
  avatar: string;
  origin: IUrl;
  gender: Gender;
  status: IStatus;
}
