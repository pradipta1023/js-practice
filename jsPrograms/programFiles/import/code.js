export const showNames = (items) => items.map((item) => item.name);
export const showStates = (items) =>
  items.map((item) => [item.name, item.state]);

export const showAges = (items) => items.map((item) => [item.name, item.age]);
