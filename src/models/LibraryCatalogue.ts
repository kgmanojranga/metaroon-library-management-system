import {Book} from "./Book";
import {LibraryItem} from "./LibraryItem";

export class LibraryCatalogue {
    libraryItems: LibraryItem[] = [];
    addItem(item: LibraryItem): void {
        this.libraryItems.push(item);
    }
    display(): void {
        console.log(this.libraryItems.map(book => book));
    }
}