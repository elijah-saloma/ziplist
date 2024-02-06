const f = [1, 3, 5];
const s = [2, 4, 6];
function zipList(first, second) {
  const output = [];
  let arrL = 0;
  for (let i = 0; i < first.length; i++) {
    output[arrL] = first[i];
    arrL++;
    output[arrL] = second[i];
    arrL++;
  }
  return output;
}

function zipListUS(first, second) {
  const zipped = _.zip(first, second);
  return _.flatten(zipped);
}

console.log(zipList(f, s));
console.log(zipListUS(f, s));
