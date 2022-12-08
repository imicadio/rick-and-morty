export interface FilterType {
  customClass?: Record<string, string | number>;
  handleSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectSpecies: string,
  handleSelectSpecies?: (event: SelectChangeEvent) => void;
}
