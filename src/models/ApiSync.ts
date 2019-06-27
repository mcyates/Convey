import axios, { AxiosResponse, AxiosPromise } from 'axios';

interface hasId {
	id?: number;
}

export class ApiSync<T extends hasId> {
	constructor(public rootUrl: string) {}

	fetch = (id: number): AxiosPromise => {
		return axios.get(`${this.rootUrl}/users/${id}`);
	};

	save = (data: T): AxiosPromise => {
		const { id } = data;
		if (id) {
			return axios.put(`${this.rootUrl}/users/${id}`, data);
		} else {
			return axios.post(`${this.rootUrl}/users`, data);
		}
	};
}
