import BookShow from "./BookShow";
import {useContext} from 'react';
import BooksContext from '../context/books';


function BookList() {
    const {books} = useContext(BooksContext);
    // const value = useContext(BooksContext);
    // const {count, incrementCount} = useContext(BooksContext);

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book}/>;
    });
    return <div className = "book-list">
        {renderedBooks}
        {/* {count}
        <button onClick={incrementCount}>Click</button> */}
    </div>;
}

export default BookList;