var storedInput;
var storedIn2;
var operation;
var visibleInput = [];
var output;
var operationDone = false;

$(function() {
   
//  document.getElementById('input').innerHTML = arrayDissolve(visibleInput);

  function makeButton(name, action, div) {
    var button = $('<button>');
    button.text(name);
    $(div).append(button);
    button.on('click', action)
  }

  function buildButtons(config, div){
    for(name in config){
      makeButton(name, config[name], div);
    }
  }

  //sets the Calculator screen based on input
  function setVisible() {
    //if(visibleInput.length > 1) {
      document.getElementById('input').innerHTML = arrayDissolve(visibleInput);
  //  }
  //  else {
  //    document.getElementById('input').innerHTML = visibleInput;
  //  }
  }

  function calcVisible() {
    document.getElementById('input').innerHTML = visibleInput;
  }

  //resets the Calculator screen to blank... resets visibleInput
  function resetVisible() {
    visibleInput = [];
    document.getElementById('input').innerHTML = visibleInput;
  }

  //checks if variable is an array and converts the array to single number
  function arrayDissolve(input) {
    if (input instanceof Array) {
      return input.join('');
    }
    else {
      return input;
    }
  }

  function digitFunction(digit) {
    if(operationDone===true){
        resetVisible();
        operationDone = false;
        console.log(operationDone);
        console.log(digit);
        visibleInput.push(digit);
        setVisible();
    }
    else {
        console.log(digit);
        visibleInput.push(digit);
        setVisible();
    }

  }

  


  buttonConfig = {
    1: function(){
      digitFunction(1);
    },
    2: function(){
      digitFunction(2);
    },
    3: function(){
      digitFunction(3);
    },
    4: function(){
      digitFunction(4);
    },
    5: function(){
      digitFunction(5);
    },
    6: function(){
      digitFunction(6);
    },
    7: function(){
      digitFunction(7);
    },
    8: function(){
      digitFunction(8);
    },
    9: function(){
      digitFunction(9);
    },
    0: function(){
      digitFunction(0);
    },
    clear: function(){
      console.log('CLEAR');
      resetVisible();
    }
  }

  // for(var i=0; i<10; i++) {
  //  buttonConfig.i = function(){
  //    console.log(i);
  //    document.getElementById('input').value = i;
  //  };
  // }

  operatorConfig = {
    square: function() {
      storedInput = arrayDissolve(visibleInput);
      output = storedInput * storedInput;
      visibleInput = output;
      setVisible();
      operationDone = true;
    },

    cube: function() {
      storedInput = arrayDissolve(visibleInput);
      output = storedInput * storedInput * storedInput;
      visibleInput = output;
      setVisible();
      operationDone = true;
    },

    divide: function() {
    storedInput = arrayDissolve(visibleInput);
    operation = 'divide';
    operationDone = true;
    },

    multiply: function() {
    storedInput = arrayDissolve(visibleInput);
    operation = 'multiply';
    operationDone = true;
    },

    add: function() {
    storedInput = arrayDissolve(visibleInput);
    operation = 'add';
    operationDone = true;
    },

    subtract: function() {
    storedInput = arrayDissolve(visibleInput);
    operation = 'subtract';
    operationDone = true;
    },

    equals: function() {
    if(operation==='divide') {
      storedIn2 = arrayDissolve(visibleInput);
      output = storedInput/storedIn2;
    }
    else if(operation==='multiply') {
      storedIn2 = arrayDissolve(visibleInput);
      output = storedInput*storedIn2;
    }
    else if(operation==='add') {
      storedIn2 = arrayDissolve(visibleInput);
      output = ((storedInput * 1) + (1 * storedIn2));
    }
    else if(operation==='subtract') {
      storedIn2 = arrayDissolve(visibleInput);
      output = storedInput - storedIn2;
    }
    visibleInput = output;
    calcVisible();
    operationDone = true;
    console.log(visibleInput);
  //  else {
  //    document.getELementById('solution').innerHTML = 'fart';
  //  }
  }


  }

  $(function(){
    buildButtons(buttonConfig, '#buttons');
  })

  $(function(){
    buildButtons(operatorConfig, '#operatorButtons');
  })



  // if current = $('#result').text() {
  //   myMath(current, input)
  // }









  
});
