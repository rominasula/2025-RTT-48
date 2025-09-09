// First <div> with <ol> and 3 <li>
const div1 = document.createElement('div');
const orderedList = document.createElement('ol');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  orderedList.appendChild(li);
}
div1.appendChild(orderedList);

// Second <div> with <ul> and 3 <li>
const div2 = document.createElement('div');
const unorderedList = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  unorderedList.appendChild(li);
}
div2.appendChild(unorderedList);

// Append both divs to the body
document.body.appendChild(div1);
document.body.appendChild(div2);
