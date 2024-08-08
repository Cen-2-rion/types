import Acquired from "../interfaces/Acquired";

export default class Movie implements Acquired {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly price: number,
        readonly year: number | string,
        readonly country: string,
        readonly tagline: string,
        readonly genre: string[],
        readonly time: number,        
    ) {
    }
}
