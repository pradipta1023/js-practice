const interns = [
  {
    name: "Pradipta",
    state: "West Bengal",
    age: 20,
  },
  {
    name: "Sagnik",
    state: "West Bengal",
    age: 21,
  },
  {
    name: "Siddhartha",
    state: "West Bengal",
    age: 20,
  },
  {
    name: "Ajoy",
    state: "West Bengal",
    age: 20,
  },
  {
    name: "Ibrahim",
    state: "Kerala",
    age: 21,
  },
  {
    name: "Santo",
    state: "Kerala",
    age: 21,
  },
  {
    name: "Gautham",
    state: "Kerala",
    age: 19,
  },
  {
    name: "Vikas",
    state: "UP",
    age: 20,
  },
  {
    name: "Vivek",
    state: "UP",
    age: 22,
  },
  {
    name: "Rahul",
    state: "UP",
    age: 22,
  },
  {
    name: "Luvkush",
    state: "UP",
    age: 22,
  },
  {
    name: "Shivang",
    state: "Delhi",
    age: 22,
  },
  {
    name: "Som",
    state: "Delhi",
    age: 20,
  },
  {
    name: "Ayush",
    state: "Delhi",
    age: 20,
  },
  {
    name: "Dinesh",
    state: "Delhi",
    age: 19,
  },
  {
    name: "Oiendrila",
    state: "West Bengal",
    age: 19,
  },
  {
    name: "Paulami",
    state: "West Bengal",
    age: 19,
  },
  {
    name: "Sandip",
    state: "West Bengal",
    age: 19,
  },
  {
    name: "Pradip",
    state: "West Bengal",
    age: 19,
  },
  {
    name: "Samiran",
    state: "West Bengal",
    age: 21,
  },
  {
    name: "Adhityan",
    state: "Kerala",
    age: 21,
  },
  {
    name: "Adarsh",
    state: "Kerala",
    age: 21,
  },
  {
    name: "Gopi",
    state: "AP",
    age: 21,
  },
];

const uniqueStates = (states, intern) => {
  states.includes(intern.state) ? states : states.push(intern.state);
  return states;
};

const totalAge = (sumOfAge, intern) => {
  return sumOfAge + intern.age;
};

const namesOfInterns = interns.map((intern) => intern.name);
const statesOfInterns = interns.reduce(uniqueStates, []);
const sumOfAges = interns.reduce(totalAge, 0);
const averageAge = sumOfAges / interns.length;

console.log({ namesOfInterns, statesOfInterns, averageAge });
