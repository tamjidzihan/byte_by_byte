export function getFormatDate(dateString: string): string {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
        year: "numeric",
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
}
