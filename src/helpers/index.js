export const getGenres = (data) => {
  const getGenresAll = data.reduce((acc, iter) => {
    return (acc = [...acc, ...iter.genres]);
  }, []);
  const dataArr = new Set(getGenresAll);

  return [...dataArr];
};
