export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

export const getMonthName = (monthNumber: number): string => {
  // if (monthNumber < 1 || monthNumber > 12) {
  //   throw new Error("Month number must be between 1 and 12");
  // }

  return new Intl.DateTimeFormat("en-GB", { month: "long" }).format(
    new Date(2020, monthNumber - 1)
  );
};

export const getMonthNumber = (monthName: string): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const index = months.findIndex(
    (month) => month.toLowerCase() === monthName.toLowerCase()
  );

  // if (index === -1) {
  //   throw new Error("Invalid month name");
  // }

  return String(index + 1); // Convert zero-based index to 1-based number
};
