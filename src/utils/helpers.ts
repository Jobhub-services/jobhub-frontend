const dateOptions: any = { day: 'numeric', month: 'short', year: 'numeric' };
export function toString(value: any): string {
	if (typeof value === 'object') {
		return value.join(',');
	}
	return value;
}

export function getGMTOffset(): string {
	const offset = new Date().getTimezoneOffset() / 60;
	if (offset < 0) return 'GMT+' + offset * -1;
	return 'GMT-' + offset;
}

export function dateWithMonthName(value: string | Date): string {
	return new Date(value).toLocaleDateString('en-US', dateOptions);
}
