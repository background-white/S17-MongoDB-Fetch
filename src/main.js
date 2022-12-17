const url = "http://localhost:9000/api/users/";
// const urlId = `http://localhost:9000/api/users/${id}`; 

function getUsers(){    
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
    })
    .catch(err=>console.error(err));
}
getUsers();    

function getUser(id){    
    fetch(url+id)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
    })
    .catch(err=>console.error(err));
}
getUsers();    
getUser("639cffdc48c345c1a1b6c2a2")