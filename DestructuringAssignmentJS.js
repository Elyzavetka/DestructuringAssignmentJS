//Object
const userProfile = {
  name: `Liza`,
  commentsQty: 23,
  hasSignedAgreement: false,
};

const { name, commentsQty } = userProfile;
const { hasSignedAgreement } = userProfile;

console.log(name);
console.log(commentsQty);

//Array

const fruits = [`Apple`, `Banana`];

const [fruitOne, fruitTwo] = fruits;

console.log(fruitOne);
console.log(fruitTwo);
