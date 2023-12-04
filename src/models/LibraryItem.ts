export abstract class LibraryItem {
    protected id: number;
    protected title: string;

    protected constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    display(){
        console.log("Display items")
    };
}