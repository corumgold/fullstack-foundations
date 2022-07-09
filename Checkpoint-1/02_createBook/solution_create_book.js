/* eslint-disable no-unused-vars, no-prototype-builtins */
//solveCount = 2;

const bookProto = {
  getInfo() {
    return `${this.title} by ${this.author}`;
  },
  getPrice() {
    return this.price;
  },
  addRating(starStr) {
    this.rating.push(starStr);
  },
  getRating() {
    return Math.floor(
      this.rating
        .map((starRating) => starRating.length)
        .reduce((acc, curr) => acc + curr, 0) / this.rating.length
    );
  },
};

function createBook(id, title, author, price) {
  const book = Object.create(bookProto);
  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];
  return book;
}
