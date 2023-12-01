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
│   tsconfig.json
│
└───src
    │   index.ts
    │
    └───models
            Book.ts
            LibraryCatalogue.ts
            User.ts
```

## Purpose

The purpose of this project is to provide a simple and extensible library management system written in TypeScript. It includes basic functionality such as adding books to a library catalog, displaying the library contents, and allowing users to borrow books.

## Functionality

The key functionalities of this project include:

1. **Book Class (`Book.ts`):** Represents a book with properties such as ID, title, author, and ISBN. It includes a `display` method.

2. **User Class (`User.ts`):** Represents a library user with properties like name and email. It includes methods for borrowing books and managing the library.

3. **LibraryCatalogue Class (`LibraryCatalogue.ts`):** Manages a collection of books (`Book` instances). It allows adding books to the catalog and displaying the current catalog.

4. **Main Script (`index.ts`):** Demonstrates the usage of the above classes by creating instances and calling their methods.


## How It Interacts with Other Components

### UML Diagram

The UML diagram illustrates the relationships between the classes:

```
@startuml
class Book {
    -id: number
    -title: string
    -author: string
    -ISBN: number
    +constructor(id: number, title: string, author: string, ISBN: number)
    +display(): void
}

class User {
    -name: string
    -email: string
    +constructor(name: string, email: string)
    +borrowBook(bookTitle: string): void
    +manageLibrary(): void
}

class LibraryCatalogue {
    -libraryItems: Book[]
    +addItem(item: Book): void
    +displayItems(): void
}

User "1" -- "*" Book: borrows
LibraryCatalogue "1" -- "*" Book: contains
@enduml
```

- The `LibraryCatalogue` class interacts with the `Book` class to manage a collection of books.
- The `User` class interacts with the `Book` class for borrowing books and managing the library.
- The main script (`index.ts`) demonstrates the usage of the classes by creating instances and calling their methods.

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