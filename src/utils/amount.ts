export const cleanNumber = (amount: string) => {
  console.log(amount);
  let number = amount;
  if (number.split(",").length !== 0) number = amount.replace(/\D/g, "");
  if (number === "NaN") return "0";
  const res = number.split(".");
  if (res[0].length >= 1 && res[0] !== "0") {
    if (res[0].length >= 1) {
      if (res[1] === undefined)
        return parseInt(res[0]).toLocaleString("en-US") + "";
      else if (res[0].length >= 5)
        return parseInt(res[0]).toLocaleString("en-US") + "";
      else if (res[1].charAt(1) !== undefined)
        return parseFloat(res[0] + "." + res[1]).toLocaleString("en-US") + "";
      else
        return parseFloat(res[0] + "." + res[1]).toLocaleString("en-US") + "";
    }
  }
  if (res[1] !== undefined && res[1].length >= 5)
    return "0." + res[1].slice(0, 8);

  return parseInt(number).toLocaleString("en-US") + "";
};
