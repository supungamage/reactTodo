var p1 = ['rangika', 26];
var p2 = ['nethum', 4];

function greet(name, age) {
  return ('Hi ' + name + 'you are ' + age);
}

console.log(greet(...p1));

var names = ['rangika', 'nethum'];
var final = [...names,'supun'];

final.forEach((name) => {
  console.log('Hello ' + name);
});
