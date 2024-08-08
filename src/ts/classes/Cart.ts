import Acquired from "../interfaces/Acquired";

export default class Cart {
    private items: Acquired[] = [];

    // добавляем объект в корзину
    addItem(item: Acquired): void {
        this.items.push(item);
    }

    // возвращаем список добавленных объектов
    getItems(): Acquired[] {
        return [...this.items];
    }

    // считаем общую стоимость всех добавленных объектов
    getTotalPrice(): number {
        return this.items.reduce((acc, item) => acc + item.price, 0);
    }
    
    // считаем общую стоимость с учётом скидки
    getTotalPriceWithDiscount(discount: number): number {
        return this.getTotalPrice() * (1 - discount / 100);
    }

    // удаляем объект из корзины по его идентификатору
    removeItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }
}
