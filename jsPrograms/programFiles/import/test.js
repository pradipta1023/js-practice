import * as display from "./code.js";
import { interns } from "./data.js";

const test = () => {
  const internData = interns;
  const nameOfInterns = display.showNames(internData);
  const stateOfInterns = display.showStates(internData);
  const ageOfInterns = display.showAges(internData);
  console.log(`${nameOfInterns}\n${stateOfInterns}\n${ageOfInterns}`);
};

function main() {
  test();
}

main();
