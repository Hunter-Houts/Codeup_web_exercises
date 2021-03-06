(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Rick",
        lastName: "Sanchez",
    }
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
       return "Hello from " + person.firstName + " " + person.lastName + "!";
    };
    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    function getDiscount(name, amount) {
        if (amount < 200) {
            return name + "! you need to pay $" + (200 - amount) + " more to get the discount, So your total is: $" + amount;
        } else {
            return name + "! your total was $" + amount + ", but you get a $" + (amount * 0.12) + " discount, so Your total is: $" + (amount - (amount * 0.12));
        }
    }
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function(shopper){

        console.log(getDiscount(shopper["name"], shopper["amount"]));
    });
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "The Alchemist",
            author: {
                firstName: "Pablo",
                lastName: "Coelho"
            }
        },
        {
            title:"Fahrenheit 451",
            author: {
                firstName: "Ray",
                lastName: "Bradbury"
            }

        },
        {
            title:"The Hitchhiker's Guide to the Galaxy",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title:"One Hundred Year of Solitude",
            author: {
                firstName: "Gabriel",
                lastName: "Marquez"
            }
        },
        {
            title: "1984",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        },
        {
            title:"Brave New World",
            author:{
                firstName: "Aldous",
                lastName: "Huxley"
            }
        }

    ];
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    for(var i = 0; i < books.length; i++){
        console.log("the book number is " + (parseInt(i)+1) + ". The title is: " + books[i].title + " and the author is: "
            + books[i].author.firstName + " " + books[i].author.lastName);
    }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    var bookcase = [];
    var book ={};
    function createBook(title, author) {
       bookcase.push(book = {
            title: title,
            author: author
        });

    }
    function showBookInfo(book){
        for(var i = 0; i < bookcase.length; i++){
            console.log("the book number is " + (parseInt(i)+1) + ". The title is: " + bookcase[i].title + " and the author is: "
                + bookcase[i].author);
        }
    }
    console.log(createBook("Example", "test"));
    console.log(createBook("example2", "test2"));
    console.log(showBookInfo(bookcase));
})();
