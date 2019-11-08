'use strict';

function firstQuestion() {
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
}
firstQuestion();

function secondQuestion() {

    var secondQuestion = prompt('Do you think I am good looking?');
        
        if ( secondQuestion.toLowerCase() === 'yes') {
            // console.log('You are absolutely correct ' + name + '!')
            alert('You are absolutely correct ' + name + '!');
        } else {
            // console.log('Get out of here ' + name + '.');
            alert('Get out of here ' + name + '.');
    
        }
}
secondQuestion();

function thirdQuestion() {

    var thirdQuestion = prompt('Do you think I like water?');
        
        if ( thirdQuestion.toLowerCase() === 'yes') {
            // console.log('You are wrong ' + name + '. Water is too bland for my palate');
            alert('You are wrong ' + name + '. Water is too bland for my palate');
        } else {
            // console.log('You are absolutely correct ' + name + '. Water is too bland for my palate');
            alert('You are absolutely correct ' + name + '. Water is too bland for my palate.');
        }
}
thirdQuestion();

function fourthQuestion() {

    var fourthQuestion = prompt('Do you think I like the winter?');
        
        if ( fourthQuestion.toLowerCase() === 'yes') {
            // console.log('You are incorrect ' + name + '. I do not like the cold.');
            alert('You are incorrect ' + name + '. I do not like the cold.');
        } else {
            // console.log('You are absolutely correct ' + name + '. I prefer warm weather.');
            alert('You are absolutely correct ' + name + '. I prefer warm weather.');
        }
}
fourthQuestion();

function fifthQuestion() {

    var fifthQuestion = prompt('Do you think I like the Amazon?');
        
        if ( fifthQuestion.toLowerCase() === 'yes') {
            // console.log('You are wrong ' + name + '.');
            alert('You are wrong ' + name + '.'); 
        } else {
            // console.log('You are absolutely correct ' + name + '. I do not like the Amazon. Too many mosquitoes.');
            alert('You are absolutely correct ' + name + '. I do not like the Amazon. Too many mosquitoes.');
        }
}
fifthQuestion();
function sixthQuestion() {

    var counter = 0;
    while ( counter !== 4) {
    
        var sixthQuestion = parseInt(prompt('Guess my favorite number! (Pick between 1 and 50)'));
            
        if (sixthQuestion > 24) {
            alert('Chill ' + name + '. Pick another number. Too high.');
        } else if (sixthQuestion < 24 ) {
            alert('Guess another number. Too low.');
        } else if (sixthQuestion === 24) {
            alert ('You are a genius ' + name + '. 24 is my favorite number!');
			break;
        } 
        counter++; 
    }

    if (counter === 4) {
			alert('You have reached the maximum attempt. My favorite number is 24. ');
    }    
}
sixthQuestion () 
    
function seventhQuestion() {

    var counter = 0;
    while ( counter !== 6) {
        
       
        var iceCreamFlavors = ['vanilla', 'chocolate', 'strawberry', 'coconut', 'hazelnut', 'horchata'];
    
        var seventhQuestion = prompt('What is my favorite ice cream flavor?').toLowerCase();
        
        for(var i = 0; i <iceCreamFlavors.length; i++) {
            if (seventhQuestion === iceCreamFlavors[i]) {
                alert('You are a correct. One of my favorite flavor is ' + iceCreamFlavors[i]);
                break; 
            } else {
                alert('Keep trying.......');
                break;
            }   
        }  
    
        if (seventhQuestion === iceCreamFlavors[i]) {
            break;
        } 
        counter++; 
    }
    
    if (counter === 6) {
        alert('Maximum attempt reached. My favorite ice cream flavors are vanilla, chocolate, strawberry, coconut, hazelnut, and horchata!');
    }
    
    alert('Thank you for participating ' + name + '.');
}

