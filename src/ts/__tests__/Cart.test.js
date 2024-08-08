import Cart from '../classes/Cart.ts';
import Movie from '../classes/Movie.ts';
import Book from '../classes/Book.ts';
import AudioAlbum from '../classes/AudioAlbum.ts';

const cart = new Cart();

// проверочные тесты
test('should add ites to cart', () => {
  cart.addItem(new Movie(101, 'RoboCop', 300, 1987, 'Fantastic', 100));
  cart.addItem(new Movie(102, 'Screamers', 300, 1995, 'Fantastic', 110));

  expect(cart.items.length).toBe(2);
});

test('the sum of items in the cart should be 1830', () => {
  cart.addItem(new Book(52, 'Call of Cthulhu', 1800, 1928, 'Howard Lovecraft', 384));
  cart.addItem(new AudioAlbum(11, 'Run Through the Jungle', 30, 1970, ' Creedence'));

  expect(cart.getTotalPrice()).toBe(1830);
});

test('the sum of items with a 10% discount should be 1647', () => {
  cart.addItem(new Book(52, 'Call of Cthulhu', 1800, 1928, 'Howard Lovecraft', 384));
  cart.addItem(new AudioAlbum(11, 'Run Through the Jungle', 30, 1970, 'Creedence'));

  expect(cart.getTotalPriceWithDiscount(10)).toBe(1647);
});

test('should remove items from cart', () => {
  cart.addItem(new Movie(102, 'Screamers', 300, 1995, 'Fantastic', 110));
  cart.removeItem(102);

  expect(cart.items.length).toBe(0);
});
