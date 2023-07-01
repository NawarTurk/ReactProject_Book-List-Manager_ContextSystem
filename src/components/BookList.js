import BookShow from "./BookShow";
import useBooksContext from '../hooks/use-books-context';


function BookList() {
    const {books} = useBooksContext();
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