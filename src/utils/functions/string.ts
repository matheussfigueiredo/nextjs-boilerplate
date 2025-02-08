export const shortName = (str: string): string => {
  const parts = str.split(" ");

  if (parts.length > 1) {
    return parts[0].charAt(0) + parts[1].charAt(0);
  }

  return parts[0].substring(0, 2);
};
