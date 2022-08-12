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
	export const success = (content: any, id?: string) => {
		let options: any = {
			position: 'top-right',
			autoClose: 7000,
			hideProgressBar: false,
			closeOnClick: true,
			rtl: false,
			pauseOnFocusLoss: true,
			draggable: true,
			pauseOnHover: true,
			theme: 'colored',
		};
		if (id) {
			options = {
				toastId: id,
				...options,
			};
		}
		toast.success(content, options);
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

export const checkScrollToButtom = (el: HTMLElement, offset = 20): boolean => {
	return el.scrollHeight - offset <= el.offsetHeight + el.scrollTop;
};

export const arrayEquals = (arr1?: Array<any>, arr2?: Array<any>) => {
	if (!arr1 || !arr2) return false;
	if (arr1?.length !== arr2?.length) return false;
	for (let i = 0; i < arr1?.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
};
