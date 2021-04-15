function clearErrors(){
    errors = document.getElementsByClassName('ferror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}
function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('ferror')[0].innerHTML = error;
}
function validate(data)
{
    clearErrors()
    var check = true;
    var email = document.forms['signin']["email"].value;
    var password = document.forms['signin']["password"].value;
    var pat=[]
    pat[0]=/^[\w]+([\w_\-\.]+)@([\w_\-\.]+)\.([a-zA-Z]{2,4})$/
    if(email.length==0)
    {
        seterror("femail","*Email address cannot be empty");
        check = false;
    }
    else if(pat[0].test(email)==false)
    {
        seterror("femail","*Invalid Email address");
        check = false;
    }
    pat[1]=/(\w+){6,20}/
    if(pat[1].test(password)==false)
    {
        seterror("fpassword","*Please enter password");
        check = false;
    }
    if(check==true)
    {
        req()
    }
}
function req()
{
    var email1=document.getElementById('email')
    var password1=document.getElementById('password')
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.response);
            alert("Form submitted with Json" + response["token"]);
        }
        else if(this.status===404)
        alert("Error 404! Page not found!");
        else if(this.status===400)
        alert("Error 400! Bad request!");
    }
    
    xhttp.open("POST", "https://reqres.in/api/login", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
    xhttp.send(`email=${email1.value}&password=${password1.value}`);
}

