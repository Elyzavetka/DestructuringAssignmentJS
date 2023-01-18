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

//Function

const userProfile1 = {
  name1: `Bogdan`,
  commentsQty: 23,
  hasSignedAgreement: false,
};

const userInfo = ({ name1, commentsQty }) => {
  if (!commentsQty) {
    return `User ${name1}  has no comments`;
  }

  return `User ${name1} has ${commentsQty} comments`;
};

userInfo(userProfile1);
