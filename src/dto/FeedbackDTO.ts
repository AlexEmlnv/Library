export class FeedbackDTO {
	id : bigint;
	readerId : bigint;
	bookId : bigint;
	date : string;
	text : string;
	rate : number;

	constructor(_id: bigint, _readerId: bigint, _bookId: bigint, _date: string, _text: string, _rate : number) {
		this.id = _id;
		this.readerId = _readerId;
		this.bookId = _bookId;
		this.date = _date;
		this.text = _text;
		this.rate = _rate;
	} 
}