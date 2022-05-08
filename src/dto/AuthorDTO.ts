export class AuthorDTO {
	id : bigint;
	firstName : string;
	lastName : string;
	dateOfBirth : string;
	books : bigint[];

	constructor(_id: bigint, _firstName: string, _lastName: string, _dateOfBirth: string, _books: bigint[]) {
		this.id = _id;
		this.firstName = _firstName;
		this.lastName = _lastName;
		this.books = _books;
	} 
}