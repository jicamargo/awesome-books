// update the date and time using luxon

import { DateTime } from './luxon.js';

function updateDateTime() {
  const now = DateTime.now();
  return DateTime.fromISO(now).toFormat('FF');
}

export { updateDateTime };
