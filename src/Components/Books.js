// Create a button,  ✅
// Upon clicking, make API call to /books endpoint ✅
// Upon getting the content from the endpoint, output each book as a button ✅


// Upon clicking a book-button, make API call to /books/{ID} endpoint
// Output all of the individual book data to the user

import axios from "axios";
import { useState, useEffect } from 'react';
import Book from "./Book";

function Books(){

    const [bookData, setBookData] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(getBooks,[]);

    function getBooks(){
        axios.get('https://csc225.mockable.io/books').then(function(response){
            // console.log(response.data);
            setBookData(response.data);
        });
    }

    function getBookById(id){
        setSelectedBook(id);
    }

    if(bookData.length === 0) {
        return <p>Loading! Hold your horses... 🐎🐎🐎</p>
    }

    if(selectedBook){
        return <div>
            <Book selectedBook={selectedBook} />
            <button onClick={() => setSelectedBook(null)}>Reset</button>
        </div>
    }
    
    return <div>
        
        {bookData.map((book) => <p key={book.id}><button onClick={() => getBookById(book.id)}>{book.title} - {book.author}</button></p>)}
    </div>;
}

export default Books;