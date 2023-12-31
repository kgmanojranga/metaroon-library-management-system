import {LibraryItem} from "./LibraryItem";

export class LibraryCatalogue {
    private libraryItems: LibraryItem[] = [];
    private static instance: LibraryCatalogue

    private constructor(){

    }

    //Implementing the Singleton pattern to ensure only one instance is created using LIbraryCatalogue class
    public static getInstance(): LibraryCatalogue {
        if(!LibraryCatalogue.instance) {
            LibraryCatalogue.instance = new LibraryCatalogue();
        } else {
            console.log("You have got a library catalog already");
        }

        return LibraryCatalogue.instance;
    }
    public addItem(item: LibraryItem): void {
        this.libraryItems.push(item);
    }
    public display(): void {
        console.log(this.libraryItems.map(book => book));
    }
}