import Cart from './classes/Cart.ts';
import Movie from './classes/Movie.ts';

const cart = new Cart();

cart.addMovie(new Movie(98, 'Титаник', 300, 1997, 'Drama', 190));
cart.addMovie(new Movie(99, 'Матрица', 300, '1999', 'Fantastic', 130));

console.log(cart);
