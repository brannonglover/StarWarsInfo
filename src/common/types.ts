export interface AppState {
  page?: string;
}

export interface INavBarProps {
  setPage: (page: string) => void;
}