import { DateTime } from "./node_modules/luxon/src/luxon.js";

export function calculateAge(userBirthday) {
  if (!userBirthday) {
    throw Error("Birthday params can't be empty");
  }

  const now = DateTime.now();
  const birthday = DateTime.fromISO(userBirthday);

  if (!birthday.isValid) {
    throw Error("Invalid birthday date format");
  }

  if (birthday > now) {
    throw Error("Cannot calculate future birthday date");
  }

  const diff = now.diff(birthday, ["year", "month", "day"]).toObject();
  return diff;
}
