export const setNotesToLS = (notes) => {
  return localStorage.setItem(`notes`, JSON.stringify(notes));
};
