window.onload = init;

function init() {

     if(!localStorage.getItem("Token")){
    document.querySelector('#btnLogin').addEventListener('click',login)
     }
     else{

        window.location.href = "Get.html"
     }
}

function login(){

    var emails  = document.getElementById('Email').value;

    var passwords = document.getElementById('Password').value;

    axios({

        method : 'post' ,
        url: 'http://localhost:4000/Admin/login',
        data : {
            email : emails ,
            password : passwords
        }
    }).then(function(res){

        

        if(res.data.code=== 200){
            
            localStorage.setItem("Token",res.data.message)
            window.location.href = "Get.html"
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Incorrect data',
                
              })
        }
    }).catch(function(err){
        console.log(err)
        
    })


}

