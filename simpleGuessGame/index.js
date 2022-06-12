async function uName(name)
  {
    console.log("Welcome " + name);
    return;
  }

async function genapp()
{
  var a = 2, b = 1;
  var readline = require('readline');

  console.log("What is your name?");
  const name = prompt(">");
  await uName(name);
  var terminal = readline.createInterface(
  {
    input : process.stdin,
    output : process.stdout
  });

  terminal.setPrompt('Stage ' + `${b}` + '\n' + 'Guess the number! (0-' + `${a}` + '): ');
  terminal.prompt();
  var randNum = gennum(a);
  terminal.on('line', function(answer)
  {
    var answerNum = parseInt(answer);

    if (answerNum > randNum)
    {
      console.log('Too high!');
    }

    else if (answerNum < randNum)
    {
      console.log('Too low!');
    }

    else if (answerNum === randNum)
    {
      console.log('Congrats!');
      a++, b++;
      randNum = gennum(a);
      terminal.setPrompt('Stage ' + `${b}` + '\n' + 'Guess the number! (0-' + `${a}` + '): ');
      terminal.prompt();
    }

    else
    {
      console.log("That wasn't a number I recognise");
    }
  });

  terminal.on('exit', function()
  {
    console.log('WWCD')
    process.exit(1);
  });
}

function gennum(a)
{
  var randomNumber = Math.round(Math.random() * a);
  return randomNumber;
}

genapp();
