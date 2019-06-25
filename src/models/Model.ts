import { AxiosResponse, AxiosPromise } from 'axios';

interface ModelAttributes<T> {
	set(update: T): void;
	getAll(): T;
	get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(data: T): AxiosPromise;
}

interface Events {
	on(eventName: string, callback: () => void): void;
	trigger(eventName: string): void;
}

interface HasID {
	id?: number;
}

export class Model<T extends HasID> {
	constructor(
		private attributes: ModelAttributes<T>,
		private events: Events,
		private sync: Sync<T>
	) {}

	get get() {
		return this.attributes.get;
	}

	get on() {
		return this.events.on;
	}
	get trigger() {
		return this.events.trigger;
	}

	fetch = (): void => {
		const id = this.get('id');
		if (typeof id !== 'number') {
			throw new Error('cannot fetch without an id');
		}

		this.sync.fetch(id).then(
			(response: AxiosResponse): void => {
				this.set(response.data);
			}
		);
	};

	save = (): void => {
		const data = this.attributes.getAll();
		this.sync
			.save(data)
			.then((response: AxiosResponse) => {
				this.trigger('save');
			})
			.catch((e) => {
				this.trigger('error');
				console.error(e);
			});
	};

	set = (update: T): void => {
		this.attributes.set(update);
		this.events.trigger('change');
	};
}
