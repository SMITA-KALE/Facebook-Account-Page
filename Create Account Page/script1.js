const form = document.getElementById('form');

form.addEventListener('submit',e=>{
  
    var name = document.myform.name.value;
    var num = document.myform.num.value;
    var email = document.myform.email.value;
    var password = document.myform.pass.value;
    // name validate pass
    if(name == null || name == ""){
        alert("Name cant be blank");
        return false;
    }else{
        return true;

    }
   // validate password
    if(password.length<6){
      alert("Password  must be at least 6 characters long.");
      return false;
    }else if(password == "" || password== null){
        alert("Please enter password");
        return false;

    }else{
        return true;
    }
   // number
    if(isNaN(num)){
        alert("Enter Valid mobile number");
        return false;
    }else if(num == "" || num == null){
        alert("Enter mobile number");
    }else{
        return true;
    }
   // validate email
   
   
});