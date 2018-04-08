var katzDeli = [];

function takeANumber (katzDeliLine, name){
  katzDeliLine.push(`${name}`);
  var position = katzDeliLine.indexOf(`${name}`);
  return `Welcome, ${name}. You are number ` + ++position +` in line.`
}

function nowServing (deliLine){
  var serving = deliLine[0];
  deliLine.shift();
  if (serving === undefined){
    return "There is nobody waiting to be served!";
  }else {
    return "Currently serving " + serving +".";
  }
}

function currentLine (katzDeliLine){
  var line = katzDeliLine;
<<<<<<< HEAD
  var i;

  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }else{
    var response = "";
    for (i = 0; i < katzDeliLine.length; i++){
      var linePosition = i + 1;
      var person = line[i];
      response += linePosition+"." + " " + person

      if (i !== katzDeliLine.length-1) {
        response += ", "
      }

    }
    return "The line is currently: " + response;
  }
=======

  if (katzDeliLine === undefined){
    return "The line is currently empty."
  }else{
    for (var i = 0; i < line.length; i++){
      // var position = line.indexOf(line[i]);
      // var person = line[i];
      return "The line is currently: " + (++(line.indexOf(line[i]))) + "." + " " + line[i] +",";
    }
  }

>>>>>>> f1d70b32aa982fe85332d6e6628d287dc722f799
}
