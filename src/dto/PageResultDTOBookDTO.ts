import { BookDTO } from "./BookDTO";

export class PageResultDTOBookDTO {
	result : BookDTO[];
	page : number;
	size : number;
	total : number;

	constructor(_result: BookDTO[], _page: number, _size: number, _total: number) {
		this.result = _result;
		this.page = _page;
		this.size = _size;
		this.total = _total;
	} 
}