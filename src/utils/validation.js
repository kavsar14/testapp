export const REGEX = {
  PRICE: /^-?(?:\d*\.\d{1,2}|\d+)$/,
}

// Valid Number
export const validNumber = (code) => {
  let regex = /^[0-9]{0,2}$/
  return regex.test(code)
}

// Valid Number
export const validPrice = (code) => {
  let regex = /^[0-9]{0,}$/
  return regex.test(code)
}