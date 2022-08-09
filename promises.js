const promise = new Promise ((resolve, reject) => {

	if(true){
		resolve('Stuff Worked');
	} 
	
	else{
		reject('Error!');
	}
})


promise
	.then(result => result + '!')
	.then(result2 => result2 + '?')
	.catch(() => console.log('error!'))
	.then(result3 => {
		// throw Error
		console.log(result3 + '!');
	})

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'Hi');
})

const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'Hi 2');
})

const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 5000, 'Hi 3');
})

Promise.all([promise, promise2, promise3, promise4])
	.then(values => {
		console.log(values)
	})


const urls = [

	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
]


const getData = async function(){

	try{
		const [users, posts, albums ] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())
			))
	console.log('users', users)
	console.log('posts', posts)
	console.log('albums', albums)
	}
	catch (err){
		console.log('oops', err)
	}
}

Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
})).then(results => {
	console.log(results);
}).catch(() => console.log('error'));


async function fetchUsers(){

	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await resp.json();
	console.log(data);

}

// object spread operator

const animals = {
	tiger : 23,
	lion: 5,
	monkey: 2,
	bird: 40
}


// store tiger in tiger, and all of the remaining entries in rest
const {tiger, ...rest} = animals;

const array = [1,2,3,4,5];

function sum (a,b,c,d,e){
	return a + b + c + d + e;
}

// you can also call this as sum(...array);

function objectSpread(p1,p2,p3){

	console.log(p1)
	console.log(p2)
	console.log(p3)
}

const { tiger, lion, ...rest } = animals;

objectSpread(tiger, lion, rest);


// you can use .finally() at the end even after catch blick
// it runs regardless if the promise is resolved, rejected or
// if an error occurs 

const getData2 = async function(){

	const arrayOfPromises = urls.map(url => fetch.(url));

	for await (let request of arrayOfPromises){

		const data = await request.json();
		console.log(data);
	}

}

// you can use Promise.allSettled if you want to run something
// regardless of whether it is rejected or not
// Promise.any() if atleast 1 resolves

/* (async function () {
  const result = await Promise.any([p1, p2, p3]);
  console.log(result); // Prints "A", "B" or "C"
})(); */

// apache vs node server
// you can customize node scripts
// node server listens to requests from client side 
// and then responds

// load balancer -> more servers 

// stripe api for payments
// twilio api