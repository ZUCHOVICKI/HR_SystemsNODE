window.onload = init;

var headers = {};
var url = "https://hr-system-uaq-node.herokuapp.com"

function init(){

    
    if(localStorage.getItem("Token")){
        
        headers = {
            headers:{
                'Authorization':"bearer " + localStorage.getItem("Token")
            }
        }
        


    }
    else{
        window.location.href="login.html"
    }
}

function Addemployees(){

    var name = document.getElementById('first_name').value
    var lname = document.getElementById('last_name').value
    var Tel = document.getElementById('Tel').value
    var email = document.getElementById('email').value
    var addr = document.getElementById('Address').value
    axios({

        method : 'post' ,
        url: url + "/HR/",
        data : {
            nombre : name ,
            apellido :lname, 
            numero :Tel ,
            correo :email,
            direccion :addr
        },
        headers:{
            'Authorization':"bearer " + localStorage.getItem("Token")
        }
    })
    .then(function(res){
        Swal.fire({
            icon: 'success',
            title: 'Employee',
            text: 'added succesfully',
           
          })
          
    }).catch(function(error){
        console.log(error)
    })
}


function CloseSesion(){

    localStorage.removeItem('Token');
    window.location.href = "login.html"
}