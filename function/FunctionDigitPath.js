import globalData from './GlobalData';

export const calculateNumberPath = (selectedDate) => {
  const date = selectedDate.getDate();
  const month = selectedDate.getMonth() + 1;
  const year = selectedDate.getFullYear();

  let digitPath = date + month + year;

  while (digitPath > 9) {
    digitPath = digitPath.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }

  globalData.digitPath = digitPath;

  return digitPath;
};
