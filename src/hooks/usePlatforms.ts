import platforms from "../data/platforms";

const usePlatforms = () => {
  return {
    data: platforms,
    error: "",
    isLoading: false,
  };
};
export default usePlatforms;
