import { useState } from 'react';

export default function BookEdit({ b, editFormSubmit,  toggleHandle}){
	const [book, setBook] = useState(b);

	const handleChange = (event) => {
		setBook({...book, bookName: event.target.value});
		// console.log(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(book.bookName);
		editFormSubmit(book.id, book.bookName);
		toggleHandle();
	}
	return (
		<div>
			<form onSubmit={handleSubmit} className='book-edit'>
				<label>Title</label>
				<input value={book.bookName} className='input' onChange={handleChange}/>
				<button className='button is-primary'>Save</button>
			</form>
		</div>
	)
}