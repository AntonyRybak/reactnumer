import globalScares1 from "./GlobalScares1";
import globalScares2 from "./GlobalScares2";
import globalScares3 from "./GlobalScares3";

export const calculateScares = (selectedDate) => {
  const day = selectedDate.getDate().toString();
  const month = (selectedDate.getMonth() + 1).toString();
  const year = selectedDate.getFullYear().toString();

  // Calculate scares1
  let scares1;
  if (day.length === 1) {
    scares1 = parseInt(day);
  } else {
    scares1 = day.split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    while (scares1 > 9) {
      scares1 = scares1.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    }
  }

  // Calculate scares2
  let scares2 = parseInt(month);
  if (scares2 > 9) {
    scares2 = scares2.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
  }

  // Calculate scares3
  let scares3 = year.split('').reduce((acc, curr) => acc + parseInt(curr), 0);
  while (scares3 > 9) {
    scares3 = scares3.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
  }

  globalScares1.scares1 = scares1;
  globalScares2.scares2 = scares2;
  globalScares3.scares3 = scares3;

  return { scares1, scares2, scares3 };
};