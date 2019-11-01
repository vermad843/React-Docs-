import React from 'react';
import ReactDOM from 'react-dom';



const user = {
  firstName : 'Vishnu',
  lastName : 'Verma'
};

let fullName = function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const element = (
  <h1>
    Hello, {fullName(user)}!
  </h1>
);




ReactDOM.render(
   element
    , document.getElementById("root"));