export const validateTaxID = (value: string) => {
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

  if (!cpfRegex.test(value) && !cnpjRegex.test(value)) {
    return false;
  }

  // Remove caracteres não numéricos
  const cleanedValue = value.replace(/\D/g, "");

  if (cleanedValue.length === 11) {
    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(cleanedValue[i - 1]) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cleanedValue[9])) {
      return false;
    }

    sum = 0;

    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(cleanedValue[i - 1]) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cleanedValue[10])) {
      return false;
    }

    return true;
  } else if (cleanedValue.length === 14) {
    let size = cleanedValue.length - 2;
    let numbers: string[] = Array.from(cleanedValue.substring(0, size));
    let digits = cleanedValue.substring(size);
    let sum = 0;
    let pos = size - 7;

    for (let i = size; i >= 1; i--) {
      sum += parseInt(numbers[size - i]) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    if (result !== parseInt(digits.charAt(0))) {
      return false;
    }

    size = size + 1;
    numbers = Array.from(cleanedValue.substring(0, size));
    sum = 0;
    pos = size - 7;

    for (let i = size; i >= 1; i--) {
      sum += parseInt(numbers[size - i]) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

    if (result !== parseInt(digits.charAt(1))) {
      return false;
    }

    return true;
  }

  return false;
};
