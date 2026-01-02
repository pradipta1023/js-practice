class Student {
  #name;
  #java;
  #dsa;
  #algo;
  #operating_system;
  constructor(name, marks) {
    this.#name = name;
    this.#java = marks.java;
    this.#dsa = marks.dsa;
    this.#algo = marks.algo;
    this.#operating_system = marks.operating_system;
  }

  total() {
    return this.#java + this.#dsa + this.#algo + this.#operating_system;
  }

  average() {
    return this.total() / 4;
  }

  getName() {
    return this.#name;
  }

  grade() {
    // const javaGrade =
  }
}
