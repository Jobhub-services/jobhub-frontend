import { toast } from 'react-toastify';

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

export function dateWithMonthName(value: string | Date): string | null {
	if (!value || value === '') return null;
	return new Date(value).toLocaleDateString('en-US', dateOptions);
}

export namespace pushNotification {
	export const success = (content: any) => {
		toast.success(content);
	};
	export const error = (content: any) => {
		toast.error(content, {
			position: 'top-right',
			autoClose: 7000,
			hideProgressBar: false,
			closeOnClick: true,
			rtl: false,
			pauseOnFocusLoss: true,
			draggable: true,
			pauseOnHover: true,
			theme: 'colored',
		});
	};
}
