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
        Loademployees()


    }
    else{
        window.location.href="login.html"
    }
}

function Loademployees(){

    axios.get(url + "/HR",headers)
    .then(function(res){
        
        DisplayHR(res.data.message)
    }).catch(function(error){
        console.log(error)
    })
}

function DisplayHR(emp){
    
    var Table = document.querySelector("tbody")
    
    for(var i = 0;i<emp.length;i++){

       var row =  Table.insertRow(-1)
        id = id+1
       var nom = row.insertCell(0)
       var lnom = row.insertCell(1)
       var tel = row.insertCell(2)
       var email = row.insertCell(3)
       var dir = row.insertCell(4)
       var id = row.insertCell(5)

       nom.innerHTML = emp[i].Nombre
       lnom.innerHTML = emp[i].Apellidos
       tel.innerHTML = emp[i].Telefono
       email.innerHTML = emp[i].Correo
       dir.innerHTML = emp[i].Direccion
       id.innerHTML = emp[i].ID

    }

}

function CloseSesion(){

    localStorage.removeItem('Token');
    window.location.href = "login.html"
}