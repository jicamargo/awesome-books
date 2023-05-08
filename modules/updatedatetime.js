// update the date and time using luxon

import { DateTime } from './luxon.js';

export default function updateDateTime() {
  const now = DateTime.now();
  return DateTime.fromISO(now).toFormat('FF');
}
