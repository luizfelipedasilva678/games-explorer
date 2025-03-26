import type { DateFormatter } from "../../presentation/ports";

class DateFormatterInLocaleDateString implements DateFormatter {
	format(date: string): string {
		return new Date(date).toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	}
}

export default DateFormatterInLocaleDateString;
