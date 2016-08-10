/*jslint node: true */
'use strict';

var Person = function (firstAndLast) {
  var firstName;
  var lastName;
  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return firstName + ' ' + lastName;
  };

  this.setFirstName = function (first) {
    firstName = first;
  };

  this.setLastName = function (last) {
    lastName = last;
  };

  this.setFullName = function (firstAndLast) {
    firstAndLast = firstAndLast.split(' ');
    firstName = firstAndLast[0];
    lastName = firstAndLast[1];
  };

  this.setFullName(firstAndLast);
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
