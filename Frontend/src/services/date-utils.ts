import dayjs from "dayjs";

export class dateUtils {
  public static convertDateToLength(startDate: string, endDate: string) {
    const start = dayjs(startDate);
    const end = dayjs(endDate);

    const yearDifference = end.diff(start, "year");

    if (yearDifference < 1) {
      const monthDifference = end.diff(start, "month");
      return monthDifference + " months";
    } else {
      return yearDifference + " years";
    }
  }
}
