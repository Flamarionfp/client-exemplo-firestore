export const formatCurrency = (value: number) => {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

export const truncate = (str: string, length: number) => {
  if (str.length > length) {
    return str.substring(0, length) + "...";
  } else {
    return str;
  }
};
