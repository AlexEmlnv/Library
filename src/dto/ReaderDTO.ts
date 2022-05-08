export class ReaderDTO {
	id : bigint;
	firstName : string;
	lastName : string;
	mail : string;
	password : string;
	address : string;
	phoneNumber : string;
	note : string;
	roles : string[];

	constructor(_id: bigint, _firstName: string, _lastName: string, _mail: string, _password: string, _address: string,
				_phoneNumber: string, _note: string, _roles: string[]) {
		this.id = _id;
		this.firstName = _firstName;
		this.lastName = _lastName;
		this.mail = _mail;
		this.password = _password;
		this.address = _address;
		this.phoneNumber = _phoneNumber;
		this.note = _note;
		this.roles = _roles;
	} 
}