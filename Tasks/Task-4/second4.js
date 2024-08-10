let book = {
        title: "The beautitian",
        author: "Divya Sree",
        pages: 28,
    printSummary: function() {
        console.log(`"${this.title}" written by ${this.author}, ${this.pages} pages.`);
    }
};
book.printSummary();
