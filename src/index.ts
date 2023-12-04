import {LibraryCatalogue} from "./models/LibraryCatalogue";
import {Book} from "./models/Book";
import {AudioBook} from "./models/AudioBook";

const main = () => {
    const libraryCatalogue = new LibraryCatalogue();

    const book1 = new Book(1, "Harry Potter and the Philosopher's Stone", "J.K. Rowling", 9780747532699);
    const book2 = new Book(2, "Harry Potter and the Chamber of Secrets", "J.K. Rowling", 9780439064873);
    const audioBook1 = new AudioBook(3, "Me Before You", "Nicolas Sparks", 100);

    libraryCatalogue.addItem(book1);
    libraryCatalogue.addItem(book2);
    libraryCatalogue.addItem(audioBook1);

    libraryCatalogue.display();

    book1.display();
}

main();