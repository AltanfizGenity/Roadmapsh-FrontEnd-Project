import { DateTime } from "./node_modules/luxon/src/luxon.js";

export function calculateAge(userBirthday) {
  const now = DateTime.now();
  const birthday = DateTime.fromISO(userBirthday);
  const diff = now.diff(birthday, ["year", "month", "day"]).toObject();

  return diff;
}
