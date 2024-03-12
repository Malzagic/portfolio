export const capitalizeString = (str) => {
  if (!str || str.length < 1) return;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const stringReplacment = (str) => {
  if (!str || str.length < 1) return;
  return str.replace(/[^a-zA-Z0-9 ]/g, " ").toUpperCase();
};

export const lowerCaseString = (str) => {
  if(!str || str.length < 1) return;
  return str.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
}