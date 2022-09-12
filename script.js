//Static Object

// const test ={
//     name:"rahul",
//     email:"rahul@test.com",
//     contact:{
//         home:9582792631,
//         personal:7858954829,
//         fax:2154457859
//     },
//     details(){
//         console.log("No details found!!")
//         }
// }

// test.details();
// console.log(test.name)

// for(key in test){
//     console.log(key , test[key])
// }

// Factory Object

// function learnObject() {
//   const test = {
//     name: "rahul",
//     email: "rahul@test.com",
//     contact: {
//       home: 9582792631,
//       personal: 7858954829,
//       fax: 2154457859,
//     },
//     details() {
//       console.log("No details found!!");
//     },

//   };
//   return test;

// }

// const printTest = learnObject();
// printTest.details();

// // console.log(printTest.contact);

// for(key in printTest){
//         console.log(key , printTest[key])
//     }

// Improved Factory Function

// function learnObject () {
//     return{
//         name: "rahul",
//         email: "rahul@test.com",
//         contact: {
//           home: 9582792631,
//           personal: 7858954829,
//           fax: 2154457859,
//         },
//         details() {
//           console.log("No details found!!");
//         },

//       };
// }

// const printTest = learnObject();
// printTest.details();

// constructor method

// function learnobject() {
//   (this.name = "rahul"),
//     (this.email = "rahul@test.com"),
//     (this.contact = {
//       home: 9582792631,
//       personal: 7858954829,
//       fax: 2154457859,
//     }),
//     (this.details = function () {
//       console.log("No details found!!");
//     });
// }

// const learnObject = new learnobject();

// learnObject.details();


// console.log(learnObject)
// console.log(learnObject.contact)

// delete learnObject.contact;

// console.log(learnObject)


const student = {
  name : "nathu",
  
}

