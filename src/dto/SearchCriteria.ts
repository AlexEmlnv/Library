import { PageDTO } from "./PageDTO";
import { SortDTO } from "./SortDTO";

export class SearchCriteria {
	title : string;
	author : string;
	genres : string[];
	publisher : string;
	publishYearFrom : number;
	publishYearTill : number;
	note : string;
	page : PageDTO;
	sort : SortDTO;

	constructor(_title: string, _author: string, _genres: string[], _publisher: string, _publishYearFrom: number,
				_publishYearTill: number, _note: string, _page: PageDTO, _sort: SortDTO) {
		this.title = _title;
		this.author = _author;
		this.genres = _genres;
		this.publisher = _publisher;
		this.publishYearFrom = _publishYearFrom;
		this.publishYearTill = _publishYearTill;
		this.note = _note;
		this.page = _page;
		this.sort = _sort;
	} 
}