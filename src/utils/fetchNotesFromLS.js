export const fetchNotesFromLS = () => {
  const data = localStorage.getItem('notes');
  return data ? JSON.parse(data) : [];
};
