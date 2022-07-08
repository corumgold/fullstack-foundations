/* eslint-disable no-unused-vars, no-prototype-builtins */
//MM: Good Job!!!
let bookProto = {
  getInfo() {
    return `${this.title} by ${this.author}`;
  },
  getPrice() {
    return this.price;
  },
  addRating(stars) {
    this.rating.push(`${stars}`);
  },
  getRating() {
    let totalReviews = this.rating.length;
    let totalStars = 0;
    for (let i = 0; i < totalReviews; i++) {
      totalStars += this.rating[i].length;
    }
    return totalStars / totalReviews;
  },
};
//Rating is never received in the function and is never used.
function createBook(id, title, author, price, rating) {
  let book = Object.create(bookProto);
  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];
  return book;
}
