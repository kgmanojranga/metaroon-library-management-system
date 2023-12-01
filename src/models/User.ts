export class User {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    public borrowBook(bookTitle: string) {
        console.log(`you borrowed ${this.name} book`);
    }

    public manageLibrary(): void {
        console.log("Managing the library");
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

}

