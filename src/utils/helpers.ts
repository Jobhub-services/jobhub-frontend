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
