export const capitalize = (str: any) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
};
