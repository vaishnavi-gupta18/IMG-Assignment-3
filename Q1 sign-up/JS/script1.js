function clearErrors(a){
    element=document.getElementById(a)
    errors = element.getElementsByClassName('ferror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}
function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('ferror')[0].innerHTML = error;

}
var check = true;
var pat=[] 
function name_val(){
    clearErrors("name")
    var name = document.forms['signup']["fname"].value;
    pat[0]=/^[\w'.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*()\^{}|~<>;:[\]]{1,}$/
    if(name.length==0)
    {
        seterror("name","*Name cannot be empty");
        check = false;
    }
    else if(pat[0].test(name)==false)
    {
        seterror("name","*Name must contain only characters");
        check = false;
    }
    }
function phno_val(){
    clearErrors("phno")
    var phno = document.forms['signup']["fphno"].value;
    pat[1]=/^(\+91[\-\s]?)?(91[\-\s]?)?[0]?(91)?(6|7|8|9)\d{9}/
    if(phno.length==0)
    {
        seterror("phno","*Phone number cannot be empty");
        check = false;
    }
    else if(pat[1].test(phno)==false)
    {
        seterror("phno","*Invalid Phone number");
        check = false;
    }
}
function age_val(){
    clearErrors("age")
    var age = document.forms['signup']["fage"].value;
    pat[4]=/[\d]+/
    if(age.length==0)
    {
        seterror("age","*Age cannot be empty");
        check = false;
    }
    else if(pat[4].test(age)==false)
    {
        seterror("age","*Age must be a number");
        check = false;
    }
    else if(age<0||age>200)
    {
        seterror("age","*Invalid Age");
        check = false;
    }
}
function email_val(){
    clearErrors("email")
    var email = document.forms['signup']["femail"].value;
    pat[2]=/^[\w]+([\w_\-\.]+)@([\w_\-\.]+)\.([a-zA-Z]{2,4})$/
    if(email.length==0)
    {
        seterror("email","*Email address cannot be empty");
        check = false;
    }
    else if(pat[2].test(email)==false)
    {
        seterror("email","*Invalid Email address");
        check = false;
    }
}
function pass_val(){
    clearErrors("pass")
    var pass = document.forms['signup']["fpass"].value;
    pat[3]=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if(pat[3].test(pass)==false)
    {
        seterror("pass","*Password must contain at least one lowercase character, one uppercase character, one digit, one special character, and a length between 8 to 20");
        check = false;
    }
}
function cpass_val(pass){
    clearErrors("cpass")
    var cpass = document.forms['signup']["fcpass"].value;
    var pass = document.forms['signup']["fpass"].value;
    if(cpass.length==0)
    {
        seterror("cpass","*Enter password again to confirm");
        check = false;
    }
    else if(pass!=cpass)
    {
        seterror("cpass","*Does not match with the entered password");
        check = false;
    }
}
function city_val(){
    clearErrors("city")
    var city = document.forms['signup']["fcity"].value;
    pat[5]=/[A-Za-z\-\s]+/
    if(city.length==0)
    {
        seterror("city","*Enter your city");
        check = false;
    }
    else if(pat[5].test(city)==false)
    {
        seterror("city","*City name must contain only characters");
        check = false;
    }
}
function validate()
{
    var check = true; 
    var name = document.forms['signup']["fname"].value;
    var phno = document.forms['signup']["fphno"].value;
    var email = document.forms['signup']["femail"].value;
    var pass = document.forms['signup']["fpass"].value;
    var cpass = document.forms['signup']["fcpass"].value;
    var age = document.forms['signup']["fage"].value;
    var city = document.forms['signup']["fcity"].value;
    var pat=[]
    if(name.length==0)
    {
        seterror("name","*Name cannot be empty");
        check = false;
    }
    if(phno.length==0)
    {
        seterror("phno","*Phone number cannot be empty");
        check = false;
    }
    if(email.length==0)
    {
        seterror("email","*Email address cannot be empty");
        check = false;
    }
    pat[3]=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if(pat[3].test(pass)==false)
    {
        seterror("pass","*Password must contain at least one lowercase character, one uppercase character, one digit, one special character, and a length between 8 to 20");
        check = false;
    }
    if(cpass.length==0)
    {
        seterror("cpass","*Enter password again to confirm");
        check = false;
    }
    if(age.length==0)
    {
        seterror("age","*Age cannot be empty");
        check = false;
    }
    if(city.length==0)
    {
        seterror("city","*Enter your city");
        check = false;
    }

    return check;
}