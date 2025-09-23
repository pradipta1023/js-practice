function world(greet, nameToTake) {
  console.log(greet, "World",nameToTake);
}

function hello(nameToTake) {
  world("hello", nameToTake)
}

function greet(name) {
  hello(name); 
}

greet("sagnik");
