
class User {
	constructor(){
		this.id = -1,
		this.email_adr = 'no user',
		this.email_verified = false,
		this.user_status = false; /* user can be either active (true) or inactive (false) */
	}

	has_access(){
		return this.email_adr;
	}

	email_adr_verified(){
		return this.email_verified;
	}

	verify_email(){
		this.email_verified = true;
		console.log(this)
		return this;
	}

	get_email_adr(){
		return this.email_adr;
	}

	get_user_status(){
		return this.user_status;
	}

	activate_user(){
		this.user_status = true;
		return this
	}

	deactivate_user(){
		this.user_status = false;
		return this
	}
}

class RealUser extends User{
	constructor(id, email_adr){
		super(id, email_adr)
		this.id = id,
		this.email_adr = email_adr
	}
}

class NullUser extends User{
	constructor(){
		super()
		this.id = '',
		this.email_adr = 'no user'
	}
}


const users = [
	new RealUser(1, 'fikilek@innopen.co.za'),
	new RealUser(2, 'siyak@innopen.co.za'),
	new RealUser(3, 'sithak@innopen.co.za'),
	new RealUser(4, 'bob@owndomain.co.za')
]

function get_user(id){
	return users.find( user => user.id === id );
}

function verify_user_email_adr(id){
	const user = get_user(id);
	if(user){
		user.verify_email();
		console.log(`users email adr  [${user.email_adr}] has been verified`);
		return this;
	} else {
		const email_adr = (new NullUser()).get_email_adr();
		console.log(`'null' user email adr [${email_adr}]`);
		return email_adr;
	}
}


function print_user(id){
	let user = get_user(id);
	if(!user){
		user = new NullUser()
	}



//	if(name != null && user.name != null){
//		name = user.name;
//		console.log(`hello ${name}`)
//	}
//
//	if(user != null && user.has_access != null  && user.has_access()  ){
//		console.log('you have access')
//	} else {
//		console.log('you are not allowed here')
//	}

	console.log(`hello, my email adr is Guest`);

	if(user.email_adr_verified()){
		console.log(`user [ ${user.email_adr} ] email adr verified`);
	} else {
		console.log(`user [ ${user.email_adr} ] email adr NOT verified`);
	}

}



