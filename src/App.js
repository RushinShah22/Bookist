import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'

export default function App(){
	const [book, setBook] = useState([]);

	const fetchBooks = async () => {
		const data = await axios.get('http://localhost:3001/books');
		setBook(data.data);
	}

	useEffect(() => {
		fetchBooks();
	}, []);

	const editBook = async (bookId, title) => {
		const data = await axios.put(`http://localhost:3001/books/${bookId}`, {
			bookName: title
		})
		setBook(book.map(val => {
			if(val.id === bookId){
				return {...val, ...(data.data)};
			}
			return val;
		}))
		
	}
	const onSubmit = async (bookName) => {
		const data = await axios.post('http://localhost:3001/books', {
			bookName
		})
		setBook([...book, data.data]);
		
	}
	const deleteImageById = async (id) => {
		const _ = await axios.delete(`http://localhost:3001/books/${id}`);
		setBook(book.filter((val) => val.id !== id));
	}
	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList books={book} deleteImageById={deleteImageById} editBook={editBook}/>
			<BookCreate onSubmit={onSubmit}/>
			
		</div>
		
	)
}