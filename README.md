# TypeScript Library Management Project

Welcome to the TypeScript Library Management project! This project serves as a simple library management system implemented in TypeScript. Below, you'll find information on its purpose, file structure, and how different components interact with each other.

## Table of Contents

- [File Structure](#file-structure)
- [Purpose](#purpose)
- [Functionality](#functionality)
- [Interactions](#interactions)
- [Specific Methods and Logic](#specific-methods-and-logic)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development Environment](#development-environment)

## File Structure

```
│   .gitignore
│   package.json
│   pnpm-lock.yaml
│   README.md
│   tsconfig.json                                                                                                      tr
│   
├───.idea
│       .gitignore
│       library-management-system.iml    
│       misc.xml
│       modules.xml
│       vcs.xml
│       workspace.xml
│       
└───src
│   classDiagrams.puml
│   index.ts
│
└───models
AudioBook.ts
Book.ts
LibraryCatalogue.ts
LibraryItem.ts
User.ts
```

## Purpose

The purpose of this project is to provide a simple and extensible library management system written in TypeScript. It includes basic functionality such as adding books to a library catalog, displaying the library contents, and allowing users to borrow books.


## How It Interacts with Other Components

### UML Diagram

The UML diagram illustrates the relationships between the classes:

```
@startuml
abstract class LibraryItem {
    #id: number
    #title: string
    +constructor(id: number, title: string)
    {abstract} +display(): void
}

class Book extends LibraryItem {
    -author: string
    -ISBN: string
    +constructor(id: number, title: string, author: string, ISBN: string)
    +display(): void
}

class AudioBook extends LibraryItem {
    -narrator: string
    -length: number
    +constructor(id: number, title: string, narrator: string, length: number)
    +display(): void
}

class User {
    -name: string
    -email: string
    +getName(): string
    +setName(name: string): void
    +getEmail(): string
    +setEmail(email: string): void
    +borrowBook(bookTitle: string): void
    +manageLibrary(): void
}

class LibraryCatalogue {
    -libraryItems: LibraryItem[]
    -static instance: LibraryCatalogue
    +static getInstance(): LibraryCatalogue
    +addItem(item: LibraryItem): void
    +displayItems(): void
}

User "1" -- "*" LibraryItem : borrows
LibraryCatalogue "1" -- "*" LibraryItem : contains
@enduml
```

## SOLID Principles

### 1. Single Responsibility Principle (SRP):

- Each class has a single responsibility:
  - **User**: Manages user information and interactions.
  - **LibraryItem**: Represents an abstract library item.
  - **Book** and **AudioBook**: Implement specific types of library items.
  - **LibraryCatalogue**: Manages the collection of library items.

### 2. Open/Closed Principle (OCP):

- The system is open for extension:
  - Additional library item types can be added without modifying existing code.

### 3. Liskov Substitution Principle (LSP):

- The `Book` and `AudioBook` classes can be used interchangeably with `LibraryItem` references in the `LibraryCatalogue`.

### 4. Interface Segregation Principle (ISP):

- Each class has focused methods related to its responsibilities, adhering to the ISP.

### 5. Dependency Inversion Principle (DIP):

- The `LibraryCatalogue` class depends on abstractions (`LibraryItem`), not on concrete implementations (`Book` and `AudioBook`).

## Specific Methods and Logic

- **Book Class (`Book.ts`):**
    - `display`: Prints a simple message indicating that it's the Book class.

- **User Class (`User.ts`):**
    - `borrowBook(bookTitle: string)`: Logs a message indicating that the user borrowed a specific book.
    - `manageLibrary()`: Logs a message indicating that the user is managing the library.

- **LibraryCatalogue Class (`LibraryCatalogue.ts`):**
    - `addItem(item: Book)`: Adds a book to the library catalog.
    - `display()`: Displays the current contents of the library catalog.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `pnpm install`
3. Run the project: `pnpm start`

## Scripts

- **start:** Runs the project using `ts-node` with watch mode.
- **build:** Transpiles TypeScript files into JavaScript (output to `dist` folder).
- **serve:** Runs the transpiled JavaScript files.

## Dependencies

- **ts-node:** Execute TypeScript files directly.
- **typescript:** The TypeScript compiler.
- **@types/node:** Type definitions for Node.js.

## Development Environment

This project uses [pnpm](https://pnpm.io/) as the package manager. Make sure you have pnpm installed globally (`npm install -g pnpm`).

Feel free to explore, modify, and enhance the project to meet your specific needs. Happy coding!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.