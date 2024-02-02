import { useState } from 'react';

export default function BookCreate({ onSubmit }){
	const [bookName, setBookName] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		
		onSubmit(bookName);
		setBookName('');
	}

	const handleChange = (event) =>{
		setBookName(event.target.value);
	}
	return (
		<div className="book-create">
			<h3>Add a Book</h3>
			<form onSubmit={handleSubmit}>
				<label>Title</label>
				
				<input className="input" value={bookName} onChange={handleChange}/>
				
				<button className="button">Create!!!</button>
			</form>
			
		</div>
	)
}