// import flatpickr from "flatpickr";
import { DateTime } from "./node_modules/luxon/src/luxon.js";

let ageForm = document.querySelector(".age-calculator");
let resultElement = document.querySelector(".result");
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector(".close-btn");

flatpickr(".birthdate-input", {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  maxDate: new Date(),
});

function calculateAge(userBirthdate) {
  if (!userBirthdate) {
    throw Error("birthdate params can't be empty");
  }

  const now = DateTime.now();
  const birthdate = DateTime.fromISO(userBirthdate);

  if (!birthdate.isValid) {
    throw Error("Invalid birthdate date format");
  }

  if (birthdate > now) {
    throw Error("Cannot calculate future birthdate date");
  }

  const diff = now.diff(birthdate, ["year", "month", "day"]).toObject();
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
  let age = calculateAge(formData.get("birthdate"));
  resultElement.innerText = getAgeString(age);
  overlay.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("open");
});
