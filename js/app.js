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

    var counter = 0;
    while ( counter !== 6) {
        
       
        var iceCreamFlavors = ['vanilla', 'chocolate', 'strawberry', 'coconut', 'hazelnut', 'horchata'];

        var seventhQuestion = prompt('What is my favorite ice cream flavor?[Vanilla, Chocolate, Strawberry, Coconut, Hazelnut, Horchata]').toLowerCase();
        
        for(var i = 0; i <iceCreamFlavors.length; i++) {
            if (seventhQuestion === 'vanilla') {
                alert('You are a correct. My favorite flavor is plain ole vanilla.');
                break; 
            } else {
                alert('Keep trying.......');
                break;
            }   
        }  

        if (seventhQuestion === 'vanilla') {
            break;
        } 
        counter++; 
    }
    
    if (counter === 6) {
        alert('Maximum attempt reached. My favorite ice cream is Vanilla!');
    }


    alert('Thank you for participating ' + name + '.');
