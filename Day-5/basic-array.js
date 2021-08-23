let numbers = [10,20,30,40,50,60];
let random = ['apple',360,[20,'hello']];

console.log(`Length of the numbers list is ${numbers.length}`);
console.log(`Value at 2nd of 3rd index of random is ${random[2][1]}`);


for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

// Conversion from string to array 
let states = 'West Bengal, Maharashtra, Tamil Nadu, Kashmir, Delhi';
let states_array = states.split(',');
console.log('The array is: ',states_array);
console.log('Length of the array is: ',states_array.length);
console.log('First element of array:  ',states_array[0]);
console.log('Last element of array is:  ',states_array[states_array.length-1]);


//conversion from the array to string
let newarray = ['dog','cat','tiger','lion','elephant'];
let newstring = newarray.join('--');
console.log('New String is:  ',newstring);
let anotherway = newarray.toString();
console.log('Now the string is:  ',anotherway);


// adding elements at the end of array
let programs = ['java','python','javascript','php','sql'];
console.log('Before pushing, the list is:  ',programs);
programs.push('c','c++');
console.log('After pushing the list is:  ',programs);


//The new length of the array is returned when the method call completes. 
//If you want to store the new array length in a variable, you could do something like this:
console.log('Length before addition is:  ',programs.length);
let newlength = programs.push('ruby');
console.log('Now the array is:   ',programs);
console.log('New length is:   ',newlength);


// removing elements from the end of the array
let element_removed = programs.pop();
console.log('Now the array is:   ',programs);
console.log('The element removed is:  ',element_removed);


// To add an element at the beginning of the array
programs.unshift('html');
console.log('The array is  ',programs);

//To remove an element from the beginning of the array
programs.shift();
console.log('The array is   ',programs);