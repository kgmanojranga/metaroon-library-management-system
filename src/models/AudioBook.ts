import {LibraryItem} from "./LibraryItem";

export class AudioBook extends LibraryItem {
    narrator: string;
    length: number;

    constructor(id: number, title: string, narrator: string, length: number) {
        super(id, title);
        this.narrator = narrator;
        this.length = length;
    }

    // Overriding and Implementing unique display method from LibraryItem class
    display() {
        console.log(`This is ${this.title} Audio Book`)
    }

}