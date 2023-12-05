import {LibraryCatalogue} from "./models/LibraryCatalogue";
import {Book} from "./models/Book";
import {AudioBook} from "./models/AudioBook";

const main = () => {
    // Create an Instance of LibraryCatalogue class
    const libraryCatalogue = LibraryCatalogue.getInstance();

    // Create LibraryItem instances
    const book1 = new Book(1, "Harry Potter and the Philosopher's Stone", "J.K. Rowling", 9780747532699);
    const book2 = new Book(2, "Harry Potter and the Chamber of Secrets", "J.K. Rowling", 9780439064873);
    const audioBook1 = new AudioBook(3, "Me Before You", "Nicolas Sparks", 100);

    // Adding created instances to the library catalogue
    libraryCatalogue.addItem(book1);
    libraryCatalogue.addItem(book2);
    libraryCatalogue.addItem(audioBook1);

    // Display added library catalogue items
    libraryCatalogue.display();

    // Calling the unique display method of book class to display the title
    book1.display();

    // Check weather a second library catalogue can be made
    const libraryCatalogue2 = LibraryCatalogue.getInstance();
}

main();