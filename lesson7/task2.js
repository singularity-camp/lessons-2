// Library borrow books and return book
// Each user max 3 books, pay, balance
// Each book has rate, due date and penalty rate: name, id;

// 1 lib, 3 users, 5 books

class Library {
  constructor(books) {
    this.books = books;
  }

  borrowBook(bookName, user) {
    // check if boook exists
    const checkBook = this.books.find((book) => book.name === bookName);
    if (!checkBook) {
        return `We don't have the book: ${bookName}`;
    }

    if (checkBook.borrower) {
      return `The ${checkBook.name} was already borowed`;
    }

    // borrow
    checkBook.borrower = user;

    return checkBook;
  }

  returnBook() {}
}

class Book {
  constructor(name, price, dueDate, penaltyRate) {
    this.name = name;
    this.price = price;
    this.dueDate = dueDate;
    this.penaltyRate = penaltyRate;
    this.borrower = null;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.numBooks = 0;
    this.debt = 0;
  }

  takeBook(book) {
    this.numBooks++;
    this.debt += book.price;
  }
}

const hp1 = new Book("HP1", 10, 5, 10);
const hp2 = new Book("HP2", 10, 7, 12);
const hp3 = new Book("HP3", 10, 5, 13);
const hp4 = new Book("HP4", 10, 6, 15);
const hp5 = new Book("HP5", 10, 8, 9);

const user1 = new User("user1");
const user2 = new User("user2");
const user3 = new User("user3");

const lib = new Library([hp1, hp2, hp3, hp4, hp5]);

function user1BorrowsBook() {
  const res = lib.borrowBook(hp2.name, user1);
  if (res instanceof Book) {
    user1.takeBook(res);
  } else {
      console.error(res)
  }
}

function user2BorrowsBook() {
    const res = lib.borrowBook(hp2.name, user2);
    if (res instanceof Book) {
        user2.takeBook(res);
    } else {
        console.error(res)
    }
}

user1BorrowsBook();
user2BorrowsBook();

console.log(user1);
console.log(user2);
console.log(lib);
