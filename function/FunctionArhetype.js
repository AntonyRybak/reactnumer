import GlobalArhetype from './GlobalArhetype'

export const calculateArhetip = (selectedDate) => {
  const day = selectedDate.getDate();
  let arhetip;

  if (day < 10) {
    arhetip = day;
  } else {
    const digits = Array.from(String(day), Number);
    arhetip = digits.reduce((acc, digit) => acc + digit);
  }

  while (arhetip > 9) {
    const digits = Array.from(String(arhetip), Number);
    arhetip = digits.reduce((acc, digit) => acc + digit);
  }

  GlobalArhetype.arhetip = arhetip;
  return arhetip;
};
