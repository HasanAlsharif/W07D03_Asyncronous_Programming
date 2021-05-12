const express = require("express");
const fs = require("fs");
const axios = require("axios");

const app = express();
const port = 3000;

/* ================================= */

// a middleware that enables us to read the received JSON data
app.use(express.json());

/* ================================= */

//*** http://localhost:3000/
app.get('/', (req, res) => {
  console.log('GET /');
  res.status(200);
  res.json('SERVER IS WORKING');
});

// ========PULSE CHECK================ 
//1 done

// 2
const readFile = () => {
  fs.readFile("./data.txt", (err, data) => {
    if (err) throw err;
    content = data.toString();
    console.log(content);
  });
};


// 3
const writeFile = () => {
  fs.writeFile("text.txt", "A new file has been created", (err) => {
    if (err) throw err;
    });

};

// 4
const getPost = (id) => {
  axios
  .get("https://jsonplaceholder.typicode.com/posts/"+id+"/")
  // in `.then()` we add the code for the success
  .then((response) => {
    console.log(response.data);
  })
  // in `.catch()` we add the code to handel the error
  .catch((err) => {
    throw err;
  });
};



// getPost(1);
//getPost(50);


// 5
const getPostAsync = async (data1) => {
    try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/"+ data1 +"/"
    );
    console.log(response.data1);
  } catch (err) {
    throw err;
  }
};


getPostAsync(1)
getPostAsync(50)


// ========PRACTICE================ 

// Q1
const appendToFile = (data) => {
 
fs.appendFile('./data.txt', data, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

};

appendToFile('\n heeeeeeey');










app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });