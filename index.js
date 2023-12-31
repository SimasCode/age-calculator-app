'use strict';
console.log('index.js file was loaded');

const form = document.getElementById('form');

const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // User date input
  const dayValue = dayInput.value;
  const monthValue = monthInput.value - 1;
  const yearValue = yearInput.value;
  console.log('dayValue ===', dayValue);
  console.log('monthValue ===', monthValue);
  console.log('yearValue ===', yearValue);

  emptyValues(dayValue, monthValue, yearValue);
  validDate(dayValue, monthValue, yearValue);

  units(dayValue, monthValue, yearValue);

  form.reset();
});

function units(day, month, year) {
  // Current date
  const currentDate = new Date();

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  console.log('currentDay ===', currentDay);
  console.log('currentMonth ===', currentMonth);
  console.log('currentYear ===', currentYear);

  // Skaičiuojame metus, mėnesius ir dienas skirtumui
  let getYear = currentYear - year;
  let getMonth = currentMonth - month;
  let getDay = currentDay - day;

  // Jei dienos skirtumas yra neigiamas, atimame vieną mėnesį
  if (getDay < 0) {
    getMonth--;
    // Apskaičiuojame dienų skirtumą naujame mėnesyje
    const lastDayOfPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
    getDay = lastDayOfPrevMonth - day + currentDay;
  }

  // Jei mėnesių skirtumas yra neigiamas, atimame vienerius metus
  if (getMonth < 0) {
    getYear--;
    getMonth += 12;
  }

  mountToDom(getDay, getMonth, getYear);

  console.log('getDay ===', getDay);
  console.log('getMonth ===', getMonth);
  console.log('getYear ===', getYear);
}

function mountToDom(day, month, year) {
  const dayOutput = document.getElementById('dayOutput');
  const monthOutput = document.getElementById('monthOutput');
  const yearOutput = document.getElementById('yearOutput');
  dayOutput.textContent = day;
  monthOutput.textContent = month;
  yearOutput.textContent = year;
}
