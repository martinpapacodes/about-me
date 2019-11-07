'use strict';

var name = prompt('What is your name?');

alert('Hello ' + name + '! Hope you know me well.');

var firstQuestion = prompt('Do you think I like the color blue?');

    if ( firstQuestion.toLowerCase() === 'yes') {
        // console.log('You are correct ' + name + '. I like the color blue.');
        alert('You are correct ' + name + '. I like the color blue.');
    } else {
        // console.log('You are incorrect ' + name + '. I like the color blue.');
        alert('You are incorrect ' + name + '. I like the color blue.');
    }

var secondQuestion = prompt('Do you think I am good looking?');
    
    if ( secondQuestion.toLowerCase() === 'yes') {
        // console.log('You are absolutely correct ' + name + '!')
        alert('You are absolutely correct ' + name + '!');
    } else {
        // console.log('Get out of here ' + name + '.');
        alert('Get out of here ' + name + '.');

    }

var thirdQuestion = prompt('Do you think I like water?');
    
    if ( thirdQuestion.toLowerCase() === 'yes') {
        // console.log('You are wrong ' + name + '. Water is too bland for my palate');
        alert('You are wrong ' + name + '. Water is too bland for my palate');
    } else {
        // console.log('You are absolutely correct ' + name + '. Water is too bland for my palate');
        alert('You are absolutely correct ' + name + '. Water is too bland for my palate.');
    }

var fourthQuestion = prompt('Do you think I like the winter?');
    
    if ( fourthQuestion.toLowerCase() === 'yes') {
        // console.log('You are incorrect ' + name + '. I do not like the cold.');
        alert('You are incorrect ' + name + '. I do not like the cold.');
    } else {
        // console.log('You are absolutely correct ' + name + '. I prefer warm weather.');
        alert('You are absolutely correct ' + name + '. I prefer warm weather.');
    }

var fifthQuestion = prompt('Do you think I like the Amazon?');
    
    if ( fifthQuestion.toLowerCase() === 'yes') {
        // console.log('You are wrong ' + name + '.');
        alert('You are wrong ' + name + '.'); 
    } else {
        // console.log('You are absolutely correct ' + name + '. I do not like the Amazon. Too many mosquitoes.');
        alert('You are absolutely correct ' + name + '. I do not like the Amazon. Too many mosquitoes.');
    }


alert('Thank you for participating ' + name + '.');
