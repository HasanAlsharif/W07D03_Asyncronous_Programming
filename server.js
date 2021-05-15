const express = require("express");
const fs = require("fs");
const axios = require("axios");
const { stringify } = require("querystring");

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


/*


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
    console.log(response.data);
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

// appendToFile('\n heeeeeeey');



// Q2
const copyFile = (fileName) => {
  fs.copyFile("./"+fileName, "copy_of_"+fileName, (err) => {
    if (err) throw err;
    
        console.log("\n done");

  });
};

copyFile('data.txt');

// Q3 : didnt totally understand the question
// the API Expects JSON data to be sent and that's why `JSON.stringify` is used
const post = JSON.stringify({
  title: "JavaScript Basics",
  body: "This post contains information about javaScript ",
  // the id of the user who is going to create the post
  userId: 1,
});

const createPost = (post) => {
 
   axios
  .post(`https://jsonplaceholder.typicode.com/posts/${post.userId}`, {
   })

  .then( (response) => {
    console.log(JSON.parse(response.data));
  })
  .catch( (error) => {
    console.log(error);
  });

};

createPost(post);


// Q4 similar to 3 
const newPost = JSON.stringify({
  // the post id that we want to update, change it when trying to update another post
  id: 1,
  title: "Updated Title",
  body: "Updated body",
  userId: 1,
});

const updatePost = (postId, data) => {
  
  axios
  .put(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
   })

  .then( (response) => {
    console.log(JSON.parse(response.data));
  })
  .catch( (error) => {
    console.log(error);
  });



};

updatePost(1, newPost);




// Q5

const getUsers5 = () => {
  
  const getPost5 = async () => {
  
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log(response.data);
    } catch (err) {
      throw err;
    }
  };
  
  getPost5();
  
};


getUsers5();

*/

// Q6
const saveUsers = () => {
  
  const getPost6 = async () => {
  
    let usersdata

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );

      usersdata = stringify(response.data) 
      
    } catch (err) {
      throw err;
    }


    const writeFile = () => {
      fs.writeFile("users.txt", usersdata , (err) => {
        if (err) throw err;
        });
    
    };
    

    writeFile();




  };

  getPost6();

  
};


saveUsers()














app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });