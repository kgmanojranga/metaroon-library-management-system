import {LibraryCatalogue} from "./models/LibraryCatalogue";
import {Book} from "./models/Book";

const main = () => {
    const libraryCatalogue = new LibraryCatalogue();

    const book1 = new Book(1, "Harry Potter and the Philosopher's Stone", "J.K. Rowling", 9780747532699);
    const book2 = new Book(1, "Harry Potter and the Chamber of Secrets", "J.K. Rowling", 9780439064873);

    libraryCatalogue.addItem(book1);
    libraryCatalogue.addItem(book2);

    libraryCatalogue.display();
}

main();