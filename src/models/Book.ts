export class Book {
    private id: number;
    private title: string;
    private author: string;
    private ISBN: number;

    constructor(id: number, title: string, author: string, ISBN: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }

    public display(): void {
        console.log("This is Book Class");
    }
}