import { BookDTO } from "./BookDTO";

export class OrderDTO {
	id : bigint;
	bookId : bigint;
	readerId : bigint;	
	ordered : string;
	returned : string;
	notes : string;
	book : BookDTO;

	constructor(_id: bigint, _bookId : bigint, _readerId : bigint, _ordered: string, _returned: string, _notes: string, _book: BookDTO) {
		this.id = _id;
		this.bookId = _bookId;
		this.readerId = _readerId;
		this.ordered = _ordered;
		this.returned = _returned;
		this.notes = _notes;
		this.book = _book;
	} 
}