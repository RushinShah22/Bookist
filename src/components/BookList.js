import BookShow from './BookShow'

export default function BookList({ books, deleteImageById, editBook}){
	return (
		<div className='book-list'>
			{books.map( val => <BookShow book={val} key={val.id} deleteImageById={deleteImageById} editBook={editBook}/>)}
		</div>
	)
}