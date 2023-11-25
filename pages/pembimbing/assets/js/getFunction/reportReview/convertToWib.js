export function convertToWIB(utcTimeString) {
  const utcDate = new Date(utcTimeString);
  const wibDate = new Date(
    utcDate.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  let dateStr = wibDate.toLocaleString("id-ID", options);
  dateStr = dateStr.replace(",", "").replace(":", ".");
  const [date, time] = dateStr.split(" ");
  return `${time} - ${date}`;
}
