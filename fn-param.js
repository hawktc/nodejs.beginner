function say(word) {
  console.log("enter say func");
  console.log(word);
}

function execute(someFunction, value) {
  console.log("enter execute func");
  someFunction(value);
}

execute(say, "Hello");
