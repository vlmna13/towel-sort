

module.exports = function towelSort (matrix) {
  if (!matrix) return [];

  let result = [];
  matrix.forEach((element, index) => {
  if (index % 2 === 0) {
      result.push(element.sort((a, b) => {
        return a - b;
      }));
    } else {
      result.push(element.sort((a, b) => {
        return b - a;
      }));
    }
  });
  result = [].concat(...result);
  return result;
}
