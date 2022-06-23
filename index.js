'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to return a give value, unchanged
 * 
 * @param {Value} value: The value with which the function will return, unchanged
 * 
 * @return {Value}: the value you put in as an argument, unchanged
 * 
 * Usage:
 *  identity(5) -> 5
 *  identity('hello') -> 'hello'
 */
function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to determine the datatype of any given value; 
 * 
 * @param {Value} value: The value that the function will evaluate to determine its datatype 
 * 
 * @return {String}: a string that identifies the datatype of the given value argument
 * 
 * Usage:
 *  typeOf(7) -> 'number'
 *  typeOf('welcome back') -> 'string'
 *  typeOf({firstName: 'John', lastName: 'Doe'}) -> 'object'
 * 
 */
function typeOf(value) {
    //determine if value is array; if so, return 'array'
    if(Array.isArray(value)) {
        return 'array';
    }
        //determine if value is a string; if so, return 'string'
        else if(typeof value === 'string'){
            return 'string';
        }
        //determine if value is a number; if so, return 'number'
        else if(typeof value === 'number') {
            return 'number';
        }
        //determine if value is undefined; if so, return 'undefined'
        else if(typeof value === 'undefined'){
            return 'undefined';
        }
        //determine if value is a boolean; if so, return 'boolean'
        else if(typeof value === 'boolean'){
            return 'boolean';
        }
        //determine if value is equal to null' of so, return strng 'null'
        else if(value === null){
            return 'null';
        }
        //determine if value is a funciton; if so, return 'funciton'
        else if(typeof value === 'function') {
            return 'function';
        }
        return 'object';
    }
    module.exports.typeOf = typeOf;

/**
 * first: Designed to return an Array of a given number of elements from the original array
 * 
 * @param {Array} array: The Array that will be iterated over to return a new Array 
 * @param {Number} num: a number representing how many elements will be copied,
 * from the beginning of the array(in ascending order)
 * 
 * @return {Array}}: it returns a new array that has the given number of elements from the array argument
 * -if the number argument is greater than the array's length, it will return the entire array
 * 
 * 
 * Usage:
 *    first([1, 2, 3, 4, 5], 3) -> [1, 2, 3]
 *    first(['hello', 'welcome', 'back'], 10) -> ['hello', 'welcome', 'back']
 
 */
function first(array,  num){
    //create an output variable with value of empty array
    let output = [];
    //determine if array parameter is an array
    if(!(Array.isArray(array))){
        return [];
    }
    //determine if there is not an number parameter
    else if(!num || typeof num !== 'number'){
        return array[0];
    }
    //if num is longer than the array's length, return entire array
    else if(num > array.length){
        return array;
    }
    else{
        //use for loop to iterate through array 
        for(let i = 0; i <= num - 1; i++) {
            //push value of array[i] into array
            output.push(array[i]);
        }    
    }
    //return final output array
    return output;
}
module.exports.first = first;

/**
 * last: Designed to return a new Array that returns a given number of elements
 * of the given array starting from the last value in array 
 * (final array will be in index ascending order)
 * 
 * @param {Array} array: the array that will be iterated over in order to return the new array
 * @param {Number} num: indicates the number of elements from the end of original array
 *  that will be copied in to the new array (in index ascending order)
 * 
 * @return: a new Array that is a copy of the last <number> of elements in array argument
 * 
 * Usage:
 *      last(['my', 'name', 'is', 'bob'], 2) -> ['is', 'bob']
 *      last(['w', 'x', 'y', 'z'], 1) -> ['z']
 * 
 */
function last(array, num){
    //create output variable with value of empty Array
    let output = [];
    //determine if array parameter is not an array; if so, return empty array
    if(!(Array.isArray) || num < 1){
        return [];
    }
    //determine if num is not a number; if so, return just the last element in Array
    else if(typeof num !== 'number'){
        return array[array.length - 1];
    }
    //determine if num is greater than array's length; if so, return entire array
    else if(num > array.length){
        return array;
    }
    //else push from last element into output array according to give num
    else{
        //use for loop to iterate through array backwards
        for(let i = array.length - 1; i >= num - 1; i--){
            //unshift elements of array into output array
            output.unshift(array[i]);
        }
    }
    //return final output object
    return output;
}
module.exports.last = last;

/**
 * indexOf: Designed to find an element in an array, and if found,
 * will return the index number of the first appearance of that specific element
 * 
 * 
 * @param {Array} array: the array that the function will iterate through to find a certain value
 * @param {Value} val: the specific value the function is looking for in the given Array
 * 
 * @return {Number}: a number representing 
 * the index number of the given Value found in the array;
 * Will return -1 if the value is not found in the array
 * 
 * Usage:
 *      indexOf(['hello', 'my', 'friend'], 'friend') -> 2
 *      indexOf(['hello', 'friend'], 'world') -> -1
 * 
 */
function indexOf(array, val) {
    //use for lop to iterate through array
    for(let i = 0; i < array.length; i++){
        //determine if array[i] === value; if so, return value of i
        if(array[i] === val){
            return i;
        }
    }
    //return -1
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to iterate over an array to determine
 *  if a given value can be found as an element in array
 * 
 * @param {Array} array: The array that the function will search to find a specific value
 * @param {Value} val: the value that function will look for in a given array
 * 
 * @return {Boolean}: the value will return true if the value is found in the array;
 * if the value is not found in the array, the function will return false
 * 
 * Usage:
 *      contains(['hello', 'my', 'friend'], 'friend') -> true
 *      contains(['hello', 'friend'], 'world') -> false
 */

function contains(array, val){
    //create output switch with initial value of false
    let output;
    //use includes method in ternary operator to determine if a give value is in an array
    array.includes(val) ? output = true : output = false;
    //return final output Boolean
    return output;
}
module.exports.contains = contains;

/**
 * each: Designed to call a function on each element/value of a given collection
 * the collection can be an Array or Object
 * 
 * @param {Array or Object} collection: the array or object whose elements/values will 
 * be evaluated by a callback function
 * @param {Function} func: the function that will be called
 *  on each element/value in the give collection
 * 
 * 
 * Usage:
 *      each(['x', 'y', 'z'] function(e, i, a){console.log(e.toUpperCase())});
 *      -> strings 'X' 'Y' 'Z' are printed to the console
 * 
 */

function each(collection, func) {
    //determine if collection is an array
    if(Array.isArray(collection)){
        //use for loop to iterate through elements of collection
        for(let i = 0; i < collection.length; i++){
            //call function once for each elements with arguments: element, index, collection
            func(collection[i], i, collection);
        }    
    }
    //else, use for in loop to iterate though collection properties
    else{
        //call func on each property of key with arguments: value, key, collection
        for(let key in collection) {
            func(collection[key], key, collection);
        }
    }    

}
module.exports.each = each;

/**
 * unique: Designed to return a new array of all the elements of an Array,
 *  with all duplicates removed
 * 
 * @param {Array} array: the original array that the function will iterate over
 * 
 * @return {Array}: returns a new Array that has all unique elements
 * of the original array
 * 
 * Usage:
 *      unique([5, 4, 4, 3, 2, 1, 1]) -> [5, 4, 2, 1]
 *      unique(['bye', 'bye', 'for', 'now]) -> ['bye', 'for', 'now']
 */

function unique(array){
    //use output variable with value of empty array
    let output = [];
    //use for loop to iterate over array argument
    for(let i = 0; i < array.length; i++){
        //determine if i is strictly equal to the value of indexOf a given element
        if(i === _.indexOf(array, array[i])){
            //if so, push element into output array
            output.push(array[i]);
        }
    }
    //return final output array
    return output;
}
module.exports.unique = unique;

/**
 * filter: Designed to iterate over an array with a callback function,
 * then create a new Array with only the elements that return true
 * 
 * @param {Array} array: the array that's elements will be tested with a callback function
 * @param {Function} func: the callback function that will be called on each element of the Array
 * 
 * @return {Array}: a new array that ONLY consists of the array elements
 *  that return true when passed through test function (func)
 * 
 * Usage:
 *      filter([1, 2, 3, 4, 5, 6], function(x){return x % 2 !== 0})
 *      -> [1, 3, 5]
 */
function filter(array, func){
    //create output array with value of empty array
    let output = [];
    //use for loop to iterate through array
    for(let i = 0; i < array.length; i++){
        //determine if current array element returns true when passed through func
        if(func(array[i], i, array) === true){
            //push current array into the output array
            output.push(array[i]);
        }
    }
    //return output array
    return output;
}
module.exports.filter = filter;

/**
 * reject: Designed to take in an array and iterates through each element 
 * with a callback function; pushes into a new array only the elements that return false when the function is passed
 * 
 * 
 * @param {Array} array: the array that will be iterated through; 
 * a function will be called on each element of the array
 * @param {Function} func: a test function that will be called
 *  to test if the element return true or false
 * 
 * @return {Array}: returns a new Array of all elements 
 * that returned false when the callback function was called on it
 * 
 * Usage:
 *      reject([1, 2, 3, 4, 5, 6], function(x){return x % 2 !== 0})
 *      -> [2, 4, 6]
 * 
 */
function reject(array, func){
    //create output array with value of empty array
    let output = [];
    //use for loop to iterate through array
    for(let i = 0; i < array.length; i++){
        //determine if the current element returns false if passed through func
        if(func(array[i], i, array) === false){
            //push current element into output array
            output.push(array[i]);
        }
    }
    //return output
    return output;
}
module.exports.reject = reject;

/**
 * partitian
 * 
 * @param {Array} array: the array that will be iterated over 
 * and whose elelments will be tested with a callback function
 * @param {Function} func: A callback function used to determine 
 * if the a given Array element is true or false
 * 
 * @return {Array}: An array of two arrays nested in it, one of the elements that tested true,
 * and an array of the elements that test to be false, respectively
 * 
 * Usage:
 *      partitian([1, 2, 3, 4, 5, 6], function(x){return x % 2 === 0})
 *      ->[[2, 4, 6],[1, 3, 5]]
 */

function partition(array, func){
    //create output variable with value of empty array
    let output = [];
    //create variable named truthy with value of called function using filter
    let truthy = _.filter(array, func);
    //create variable named falsy with value of reject function called with argumetns array and func
    let falsy = _.reject(array, func);
    output.push(truthy, falsy);
    //return output array 
    return output;
}
module.exports.partition = partition;

/**
 * map: Designed to take in an array or object (collection); 
 * the function iterates over each element/value in the given collection, and return the 'transformed' collection 
 * 
 * @param {Array or Object} collection: the collection that will be iterated over in the function
 * @param {Function} func: the function that will be called to alter each element/value in the collection
 * 
 * @return: returns the transformed collection- Array or Object- once each element/value of the given
 *  collection has been passed through the function
 * 
 * Usage:
 * 
 *      map([0, 1, 2, 3], function(e){return e * 2}) -> [0, 2, 4, 6]
 *      map(['x', 'y', 'z'], function(e){retun e.toUpperCase()) -> ['X', 'Y', 'Z']
 */
function map(collection, func){
    
    //determine if collection is an Array
    if(Array.isArray(collection)){
        //create an output variable named output with value of emput array
        let output = [];
        //use for loop to iterate through collection
        for(let i = 0; i < collection.length; i++){
            //call func on each element of collection using arguments: collection[i], i, collection 
            output.push(func(collection[i], i, collection));
        } 
        //return output array
        return output;   
    }
    //otherwise, collection will be an Object
    else{
        //create an output variable with value of an empty object
        let output = [];
        //use for in loop to iterate through key/value pairs in collection
         for(let key in collection){
            //call func using following arguments: collection[key], key, collection
            output.push(func(collection[key], key, collection));
         }
        return output;  
    }
}
module.exports.map = map;

/**
 * pluck: Designed to take in an array of object and return an array of object values that match a given property
 * 
 * @param {Array} array: An array of objects that will be iterated over to find a specific property in each object element
 * @param {Value} proptery: A object property name that the function will use to match to properties in each object in the arry
 * 
 * @return {Array}:
 * 
 * Usage:
 * 
 * 
 * 
 * 
 */


/**
 * name
 * 
 * @param
 * @param
 * 
 * @return
 * 
 * Usage:
 * 
 * 
 * 
 * 
 */


/**
 * name
 * 
 * @param
 * @param
 * 
 * @return
 * 
 * Usage:
 * 
 * 
 * 
 * 
 */


/**
 * name
 * 
 * @param
 * @param
 * 
 * @return
 * 
 * Usage:
 * 
 * 
 * 
 * 
 */


/**
 * name
 * 
 * @param
 * @param
 * 
 * @return
 * 
 * Usage:
 * 
 * 
 * 
 * 
 */


/**
 * name
 * 
 * @param
 * @param
 * 
 * @return
 * 
 * Usage:
 * 
 * 
 * 
 * 
 */