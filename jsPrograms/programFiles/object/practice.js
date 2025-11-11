const interns = {
  1: {
    name: "Pradipta",
    age: 20,
    post: "Intern",
    address: { state: "West Bengal", locality: "Kolkata" },
    experience: 5,
    nickname: "no nickname found",
  },
  2: {
    name: "Siddhu",
    age: 20,
    post: "Intern",
    address: { state: "Bihar", locality: "sklm" },
    experience: 5,
    nickname: "Khabri",
  },
  showIntern: (key) => {
    return interns[key];
  },
  showInternSpecific: (key, details) => interns[key][details],
  showInterns() {
    return;
  },
};

console.log(interns.showInterns());
console.log(interns.showIntern(1), "\n");
console.log(interns.showIntern(2), "\n");
console.log(interns.showInternSpecific(1, "address"));
console.log(interns.showInternSpecific(2, "nickname"));
