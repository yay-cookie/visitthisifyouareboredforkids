// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// let iceCream = 'chocolate';
// if(iceCream === 'chocolate') {
  // alert('Yay, I love chocolate ice cream!');
// } else {
  // alert('Awwww, but chocolate is my favorite...');
// }

// document.querySelector('html').onclick = function() {
    // alert('Yaprak + Laura = Quatsch');
// }
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/smiley.jpg') {
      myImage.setAttribute('src','images/frowny.png');
      alert('Yay, I love chocolate ice cream!');
    } else {
      myImage.setAttribute('src','images/smiley.jpg');
      alert('I don\'t like Tofu!');
    }
}
