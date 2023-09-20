function author (name,birthYear,nationality){
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function book (title,author,genre,price){
    this.title = title;
    this.author=author;
    this.genre =genre;
    this.price = price;
}
book.prototype.getBookInfo = function(){
    console.log(`Title is - ${this.title}`);
    console.log(`Author Name is - ${this.author.name}`);
    console.log(`Genre is - ${this.genre}`);
    console.log(`Price is - ${this.price}`);
}
let author1 = new author ("Mark Twain",1835,"American");
let book1= new book ("The Adventures of Tom Sawyer",author1,"Bildungsroman, picaresque novel, satire, folk, children's literature",149);
let author2 = new author("Mohandas Karamchand Gandhi",1869,"Indian");
let book2 = new book ("My Experiments with Truth: Mahatma M.K.Gandhi",author2,"Biography",449);

let arr = [];
arr.push(book1,book2);
function bookstore(arr){
    for(let i=0; i<arr.length; i++){
        arr[i].getBookInfo();
    }
}
book1.getBookInfo()

console.log(book1)
console.log(book2)


bookstore(arr)
