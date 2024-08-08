import Acquired from "../interfaces/Acquired";

export default class Book implements Acquired {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly price: number,
        readonly year: number | string,
        readonly author: string,
        readonly pages: number,
    ) {      
    }
}
