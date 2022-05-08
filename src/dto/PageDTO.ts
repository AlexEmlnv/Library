export class PageDTO {
	size : bigint;
	index : bigint;

	constructor(_size: bigint, _index: bigint) {
		this.size = _size;
		this.index = _index;
	} 
}