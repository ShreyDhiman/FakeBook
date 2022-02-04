// Submit = () => {
//   var fname = document.getElementById("fname").value;
//   var lname = document.getElementById("lname").value;
//   var number = document.getElementById("number").value;
//   var email = document.getElementById("email").value;
//   var dob = document.getElementById("dob").value;

//   //  start of name validation
//   if (fname == "" || lname == "") {
//     alert("Please provide your full name!");
//     return false;
//   } else {
//     var nameErr = true;
//   }
//   //   end of name validation

//   // start of email validation
//   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//     var emailErr = true;
//   } else {
//     alert("enter valid email");
//   }
//   //   end of email validation

//   // start of number validation
//   if (/^[6-9]\d{9}$/.test(number)) {
//     var numErr = true;
//   } else {
//     alert("Enter valid number");
//   }
//   // end of number validation

//   // start of dob validation
//   var year = Number(dob.substr(0, 4));
//   var month = Number(dob.substr(5, 2));
//   var day = Number(dob.substr(8, 2));
//   var today = new Date();
//   var age = today.getFullYear() - year;
//   if (
//     today.getMonth() < month ||
//     (today.getMonth() == month && today.getDate() < day)
//   ) {
//     age--;
//   }
//   if (age >= 18) {
//     var ageErr = true;
//   } else {
//     alert("You are under 18");
//   }

//   //   end of number validation
//   var gen22 = "";
//   if (document.getElementById("genMale").checked) {
//     gen22 = document.getElementById("genMale").value;
//   } else if (document.getElementById("genFemale").checked) {
//     gen22 = document.getElementById("genFemale").value;
//   } else {
//     gen22 = document.getElementById("genOther").value;
//   }

//   // end of gender validation

//   // Writing all the information
//   if (nameErr == true && emailErr == true && numErr == true && ageErr == true) {
//     alert(
//       "Confirm the Information \n Name: " +
//         fname +
//         " " +
//         lname +
//         "\n Email: " +
//         email +
//         "\n Phone No: " +
//         number +
//         "\n Date of Birth: " +
//         dob +
//         "\n Gender: " +
//         gen22
//     );
//   }

//   var para = new URLSearchParams();
//   para.append(fname, lname);
//   location.href = "./fakebook.html" + para.toString();

//   console.log(fname);
//   let user = new Set();
//   user.add(fname);
//   user.add(lname);
//   user.add(email);
//   user.add(number);
//   user.add(dob);
//   user.add(gen22);
//   //set
//   console.log(user);
//   //for
//   eachuser.forEach((n) => {
//     console.log(n);
//   });
//   //has
//   console.log(user.has("Rohit"));
//   //get
//   console.log(user.get("gupta"));

//   let user1 = new Map();
//   user1.set(fname + " " + lname, getDate());
//   console.log(user1.keys());
// };

Submit = () => {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var dob = document.getElementById("dob").value;

  //  start of name validation
  if (fname == "" || lname == "") {
    alert("Please provide your full name!");
    return false;
  } else {
    var nameErr = true;
  }
  //   end of name validation

  // start of email validation
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    var emailErr = true;
  } else {
    alert("enter valid email");
  }
  //   end of email validation

  // start of number validation
  if (/^[6-9]\d{9}$/.test(number)) {
    var numErr = true;
  } else {
    alert("Enter valid number");
  }
  // end of number validation

  // start of dob validation
  var year = Number(dob.substr(0, 4));
  var month = Number(dob.substr(5, 2));
  var day = Number(dob.substr(8, 2));
  var today = new Date();
  var age = today.getFullYear() - year;
  if (
    today.getMonth() < month ||
    (today.getMonth() == month && today.getDate() < day)
  ) {
    age--;
  }
  if (age >= 18) {
    var ageErr = true;
  } else {
    alert("You are under 18");
  }

  //   end of number validation
  var gen22 = "";
  if (document.getElementById("genMale").checked) {
    gen22 = document.getElementById("genMale").value;
  } else if (document.getElementById("genFemale").checked) {
    gen22 = document.getElementById("genFemale").value;
  } else {
    gen22 = document.getElementById("genOther").value;
  }

  // end of gender validation

  // Writing all the information
  if (nameErr == true && emailErr == true && numErr == true && ageErr == true) {
    alert(
      "Confirm the Information \n Name: " +
        fname +
        " " +
        lname +
        "\n Email: " +
        email +
        "\n Phone No: " +
        number +
        "\n Date of Birth: " +
        dob +
        "\n Gender: " +
        gen22
    );
    document.location.href = "./fakebook.html";
  }
  // end of writing all th info.
  let user = new Set();
  user.add(fname);
  user.add(lname);
  user.add(email);
  user.add(number);
  user.add(dob);
  user.add(gen22);
  //set
  console.log(user);
  //for each
  user.forEach((n) => {
    console.log(n);
  });
  //has
  console.log(user.has("Rohit"));
  //map
  var date = new Date();
  console.log(date);
  let user1 = new Map();
  user1.set(fname + " " + lname, new Date());
  console.log(user1);
};
