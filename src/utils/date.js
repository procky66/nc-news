export const getDateString = (created_at) => {
  const dateTime = new Date(created_at);

  const dateString =
    dateTime.getDate() +
    "/" +
    (dateTime.getMonth() + 1) +
    "/" +
    dateTime.getFullYear() +
    " at " +
    dateTime.getHours() +
    ":" +
    (dateTime.getMinutes()+"").padStart(2,"0");
  return dateString;
};
