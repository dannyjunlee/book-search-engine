# Book Search Engine

## Description

This project is a Google Books search engine. The purpose of this assignment was to transform the existing code (which was already fully functional) built with RESTful API into a GraphQL API built with Apollo Server. This project was meaningful because, depending on technology advancements, job requirements, or any other reason, I may be required to make such conversions to large bodies of functional code in the future. This project gave me the opportunity to practice such translation with this given application. I had to make changes to the code without changing overarching functionality, making sure things don't break or change in how they function.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

Please run `npm i` and then `npm run develop` in order to install the required dependencies and then open a development environment (localhost server).

## Usage

Open either the development environment or the deployed application.

To search for a book, input the author or book title and press "Submit Search". You will be presented with a list of up to 10 books that match the keyword(s) you provided.

To save a book to your account, you must log in. You can click on the "Login/Sign Up" on the top right corner. If you already have an account, simply log in. If not, create an account. Once you are logged in, you can see a "Save this Book!" option beneath each book option. Books that have already been saved will show a lightened out button saying "This book has already been saved!" instead. If you click on "See Your Books" on the top right, you will see a list of the books you have saved.

To delete a book, navigate to "See Your Books" and click on "Delete this Book!" for the book you wish to delete.

To logout, simply click on "Logout" on the top right.

## Credits

This project was done with help from the Columbia Coding Boot Camp course modules.

## License

Copyright 2022 dannyjunlee

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.