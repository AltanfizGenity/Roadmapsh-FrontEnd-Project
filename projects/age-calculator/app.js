import { DateTime } from "./node_modules/luxon/src/luxon.js";

let ageForm = document.querySelector(".age-calculator");
let resultElement = document.querySelector(".result");

function calculateAge(userBirthday) {
  const now = DateTime.now();
  const birthday = DateTime.fromISO(userBirthday);
  const diff = now.diff(birthday, ["year", "month", "day"]).toObject();

  return diff;
}

export function getAgeString(age) {
  let { years, months, days } = age;
  days = Math.floor(days);

  // if the age is zero or just born
  if (years == 0 && months == 0 && days == 0) {
    return "You are born today!";
  }

  return `You are ${years ? `${years} years` : ""} ${
    months ? `${months} months` : ""
  } ${days ? `${days} days` : ""} old`;
}

ageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(ageForm);
  let age = calculateAge(formData.get("birthday"));
  resultElement.innerText = getAgeString(age);
});
