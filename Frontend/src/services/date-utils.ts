export class dateUtils {
  public static convertDateToLength(startDate: string, endDate: string) {
    const difference =
      new Date(endDate).getTime() - new Date(startDate).getTime();
    return Math.round(difference / 3.154e10);
  }
}
