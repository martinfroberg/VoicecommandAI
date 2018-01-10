if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  annyang.setLanguage('sv-SE');
  var commands = {
    'meny': function() {
      $(document.body).load('categories/index.html');
    }
  };

  var commands = {
    'självstyrande bilar': function() {
      $(document.body).load('categoies/cars.html');
    }
  };

  var commands = {
    'diagnostik': function() {
      $(document.body).load('categoies/diagnos.html');
    }
  };

  var commands = {
    'smarthem': function() {
      $(document.body).load('categoies/home.html');
    }
  };

  var commands = {
    'säkerhet': function() {
      $(document.body).load('categoies/safety.html');
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
