import Acquired from "../interfaces/Acquired";

export default class Device implements Acquired {
	constructor(
		readonly id: number,
		readonly title: string,
		readonly price: number,
		readonly year: number | string,
		private count = 1,
	) { 
    }

	add(): void {
		this.count += 1;
	}

	delete(): void {
		this.count -= 1;
	}
}
