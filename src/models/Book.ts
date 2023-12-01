import {LibraryItem} from "./LibraryItem";

export class Book extends LibraryItem{

    private author: string;
    private ISBN: number;

    constructor(id: number, title: string, author: string, ISBN: number) {
        super(id, title);
        this.author = author;
        this.ISBN = ISBN;
    }

    public display(): void {
        console.log("This is Book Class");
    }
}