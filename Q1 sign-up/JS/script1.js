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
function validate()
{
    clearErrors()
    var check = true; 
    var name = document.forms['signup']["fname"].value;
    var phno = document.forms['signup']["fphno"].value;
    var email = document.forms['signup']["femail"].value;
    var pass = document.forms['signup']["fpass"].value;
    var cpass = document.forms['signup']["fcpass"].value;
    var age = document.forms['signup']["fage"].value;
    var city = document.forms['signup']["fcity"].value;
    var pat=[]
    pat[0]=/[A-Za-z\s]/
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
    pat[1]=/(\+91)?-?(6|7|8|9)\d{9}/
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
    pat[3]=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\!\@\#\$\%\^&\*])(?=.{8,})/
    if(pat[3].test(pass)==false)
    {
        seterror("pass","*Password must contain at least one lowercase character, one uppercase character, one digit, one special character, and a length between 8 to 20");
        check = false;
    }
    if(cpass.length==0)
    {
        seterror("cpass","*Re-enter password to confirm");
        check = false;
    }
    else if(pass!=cpass)
    {
        seterror("cpass","*Does not match with the entered password");
        check = false;
    }
    pat[4]=/\d+/
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
        seterror("age","*Enter valid age");
        check = false;
    }
    pat[5]=/[A-Za-z\-]+/
    if(pat[5].test(city)==false)
    {
        seterror("city","*City name must contain only characters");
        check = false;
    }

    return check;
   
}