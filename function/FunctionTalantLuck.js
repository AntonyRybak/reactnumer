import globalTalantLuck from "./GlobalTalantLuck";

export const calculateTalantLuck = (selectedDate) => {
  const date = selectedDate.getDate();
  const month = selectedDate.getMonth() + 1;
  const year = selectedDate.getFullYear();

  let talantLuck = date + month + year;
  
  // Расчет числа пути
  while (talantLuck > 22) {
    talantLuck = talantLuck
      .toString()
      .split('')
      .reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
  
  globalTalantLuck.talantLuck = talantLuck;
  
  return talantLuck;
};
