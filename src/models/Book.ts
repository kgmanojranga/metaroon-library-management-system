import {LibraryItem} from "./LibraryItem";

export class Book extends LibraryItem{

    private author: string;
    private ISBN: number;

    constructor(id: number, title: string, author: string, ISBN: number) {
        super(id, title);
        this.author = author;
        this.ISBN = ISBN;
    }

    // Overriding and Implementing unique display method from LibraryItem class
    public display(): void {
        console.log(`This is ${this.title} Book`);
    }
}