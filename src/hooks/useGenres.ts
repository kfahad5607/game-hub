import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return {
    data: genres,
    error: "",
    isLoading: false,
  };
};

export default useGenres;
