import { useState } from 'react';
import BookEdit from './BookEdit'
export default function BookShow({ book, deleteImageById, editBook}){
	const [showEdit, setShowEdit] = useState(false);

	const handleClick = () => {
		deleteImageById(book.id);
	}
	const handleFormToggle = () => {
		setShowEdit(!showEdit);
	}

	const editFormSubmit = (bookID, title) => {
		handleFormToggle();
		editBook(bookID, title);
	}

	let content = <h3>{book.bookName}</h3>;
	if(showEdit){
		content = <BookEdit b={book} toggleHandle={handleFormToggle} editFormSubmit={editFormSubmit}/>;
	}
	return (
		<div className="book-show" >
			<div>{content}</div>
			<img alt={book.BookName} src={`https://picsum.photos/seed/${book.id}/300/200`} />
			<div className="actions">
				<button className='edit' onClick={handleFormToggle} >Edit</button>
				<button className="delete" onClick={handleClick}> Delete</button>
				
			</div>

		</div>
	)
}