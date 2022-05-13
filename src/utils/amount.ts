export const cleanNumber = (number: string) => {
  if (number === "NaN") return "0";
  const res = number.split(".");
  if (res[0].length >= 1 && res[0] !== "0") {
    if (res[0].length >= 1) {
      if (res[1] === undefined) return res[0];
      else if (res[0].length >= 5) return res[0];
      else if (res[1].charAt(1) !== undefined)
        return res[0] + "." + res[1].charAt(0) + res[1].charAt(1);
      else return res[0] + "." + res[1].charAt(0);
    }
  }
  if (res[1] !== undefined && res[1].length >= 5)
    return "0." + res[1].slice(0, 8);
  return number;
};
