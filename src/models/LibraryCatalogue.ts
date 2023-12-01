import {Book} from "./Book";

export class LibraryCatalogue {
    libraryItems: Book[] = [];
    addItem(item: Book): void {
        this.libraryItems.push(item);
    }
    display(): void {
        console.log(this.libraryItems.map(book => book));
    }
}