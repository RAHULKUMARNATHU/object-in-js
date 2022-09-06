// console.log("test")
// callback

const data = [
  {
    user: "Rahul",
    email: "rahul@test.com",
    position: "software Developer",
  },
  {
    user: "nathu",
    email: "nathu@test.com",
    position: "software Engineer",
  },
];

// function getData(){
//     setTimeout(()=>{
//         let output=""
//         data.map((item)=>{
//             output +=`<li>${item.user} </li>`
//         })
//         document.body.innerHTML=output
//     },1000)
// }

// const createData = (newData ,callback) =>{
//     setTimeout(()=>{
//         data.push(newData);
//         callback()
//     },2000)

// }

// createData({user:"vivek" , email:"vivek@test.com" , position:"software Developer"} , getData);
// getData()
// console.log(data)

// Promises
const printemail = () => {
  setTimeout(() => {
    let printoutput = "";
    data.map((list) => {
      printoutput += `<li>${list.email} </li>`;
    });
    document.body.innerHTML = printoutput;
  }, 1000);
};

const createData = (newData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newData);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("something wents wrong");
      }
    }, 2000);
  });
};


// createData({
//   user: "vivek",
//   email: "vivek@test.com",
//   position: "software Developer",
// })
//   .then(printemail)
//   .catch((err) => {
//     console.log(err);
//   });


async function start(){
    await createData({
          user: "vivek",
          email: "vivek@test.com",
          position: "software Developer",
        })
        printemail();
}

start();
//   Async Await

