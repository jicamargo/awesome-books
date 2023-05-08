// update the date and time using luxon

import { DateTime } from './luxon.js';

const updateDateTime = () => {
  const now = DateTime.now();
  return DateTime.fromISO(now).toFormat('FF');
};

export default updateDateTime;
