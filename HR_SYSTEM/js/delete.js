window.onload = init;

var headers = {};
var url = "https://hr-system-uaq-node.herokuapp.com/"

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

function SearchEmp(){

    var id = document.getElementById('IDSearch').value
    var id2 = parseInt(id)
    axios({

        method : 'get' ,
        url: url +"/HR/"+id2,
        data : {
            id : id2 ,
           
        },
        headers:{
            'Authorization':"bearer " + localStorage.getItem("Token")
        }
    }).then(function(res){
        displayEmp(res.data.message)
    }).catch(function(err){
        console.log(err)
    })
}

function displayEmp(emp){
    var id = document.getElementById('ID')
    var name = document.getElementById('first_name')
    var lname = document.getElementById('last_name')
    var Tel = document.getElementById('Tel')
    var email = document.getElementById('email')
    var addr = document.getElementById('Address')
    id.value = emp[0].ID
    name.value = emp[0].Nombre
    lname.value = emp[0].Apellidos
    Tel.value = emp[0].Telefono
    email.value = emp[0].Correo
    addr.value = emp[0].Direccion
        

}

 function EditEmp (){
    
    var id = document.getElementById('ID').value
    
    

 axios({

        method : 'delete' ,
        url: url + "/HR/"+id,
       
        headers:{
            'Authorization':"bearer " + localStorage.getItem("Token"),
            
            
        }
    })
    .then(function(res){
        Swal.fire({
            icon: 'success',
            title: 'Employee',
            text: 'Deleted succesfully',
           
          })
          
    }).catch(function(error){
        console.log(error)
    })
}


function CloseSesion(){

    localStorage.removeItem('Token');
    window.location.href = "login.html"
}