export abstract class LibraryItem {
    private id: number;
    private title: string;

    protected constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
}