/**
 * @param {number}
 * Accept number
 * Comma saparate number for  nepali number
 * */
export const getCommaSeperateNumber = (number: any) => {
  if ((typeof number === "string" && number === "") || !number) return "";

  number = number.toString();
  let numArray;
  if (number.includes(".")) {
    numArray = number.split(".");
    number = numArray[0];
  }
  let lastThree = number.substring(number.length - 3);
  let otherNumbers = number.substring(0, number.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return numArray ? res + "." + numArray[1] : res;
};

/**
 * @param {number}
 * @param {number} for unit
 * Comma saparate number for  nepali number
 * */
export const convertDollersToRupees = (
  dollers: any,
  currencyRates: number = 118
) => {
  if (dollers.includes("$")) {
    return +(dollers.replace(/[^0-9]/, "") * currencyRates).toFixed(2);
  }
  return dollers * currencyRates;
};

export default function formatDate(date?: string | Date) {
  if (date) {
    const dateVal: Date = date ? new Date(date) : new Date();
    let day = dateVal.getDate();
    let month = dateVal.getMonth() + 1;
    let year = dateVal.getFullYear();

    const formattedDate =
      year +
      "-" +
      (month < 10 ? "0" + month : month) +
      "-" +
      (day < 10 ? "0" + day : day);

    return formattedDate;
  }

  return "";
}
