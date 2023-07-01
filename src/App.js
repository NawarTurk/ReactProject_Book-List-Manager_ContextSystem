import BookList from './components/BookList';
import {useEffect, useContext} from 'react';
import BookCreate from './components/BookCreate';
import BooksContext from './context/books';

function App() {
    const {fetchBooks} = useContext(BooksContext);
    // fetchBooks(); very bad, infinite loop of reloading
    useEffect(()=> {
        fetchBooks();
    }, []);

    
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;