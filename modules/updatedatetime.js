// update the date and time

function updateDateTime() {
  const currentDateTime = new Date();
  const dateTimeOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
  };
  return currentDateTime.toLocaleDateString('en-US', dateTimeOptions)
}

export {updateDateTime};
