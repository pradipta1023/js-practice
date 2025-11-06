function isArray(value) {
  return typeof value === "object";
}

function isSameArray(array1, array2, index) {
  if (index > array1.length) {
    return true;
  }
  if (isArray(array1[index])) {
    return isSameArray(array1[index], array2[index], 0);
  }
  if (array1[index] !== array2[index]) {
    return false;
  }
  return isSameArray(array1, array2, index + 1);
}

function areDeepEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  if (isArray(array1) !== isArray(array2)) {
    return false;
  }

  return isSameArray(array1, array2, 0);
}