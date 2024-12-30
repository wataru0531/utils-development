// console.log("hello")


const fetchDataFromServer = () => {
  fetch("http://localhost:5050/data").then((res) => {
    return res.json()
  }).then((data) => {
    console.log(data);
  })
};

fetchDataFromServer();