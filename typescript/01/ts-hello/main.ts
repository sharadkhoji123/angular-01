let message;
message = 'abc';
let endsWith = message.endsWith('c');
let endsWithC = (<string>message).endsWith('c');
let alternativeway = (message as string).endsWith('c');

//arrow function

//In Javascript
let log = function(message) {
    console.log(message)
}
//In Typescript
let dolog = message => {
    console.log
}