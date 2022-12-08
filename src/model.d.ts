import React from "react";

import { ReactComponent as Icon1 } from "./assets/alive.svg";
import { ReactComponent as Icon2 } from "./assets/dead.svg";
import { ReactComponent as Icon3 } from "./assets/unknown.svg";

export type TStatus = "Alive" | "Dead" | "unknown";
export enum IStatus {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown",
}

export type Gender = "Female" | "Male" | "Genderless" | "unknown";

// I know that I shouldn't write it like this, but I wanted to practice the skills
export interface IUrl {
  name: string;
  url: string;
}

export interface ICharacter extends IUrl {
  id: number;
  status: TStatus;
  species: string;
  gender: Gender;
  origin: IUrl;
  location: IUrl;
  image: string;
  episode: string[];
  created: string;
}

export interface IPagination {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface IStatusIcons {
  name: TStatus;
  icon: IconSVG;
}

export interface ITableHeader {
  name: string;
  species: string;
  avatar: string;
  origin: IUrl;
  gender: Gender;
  status: IStatusIcons;
}

export enum IconSVG {
  Alive = React.createElement(Icon1),
  Dead = React.createElement(Icon2),
  unknown = React.createElement(Icon3),
}
