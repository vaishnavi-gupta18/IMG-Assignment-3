var myarray = []
var xhr = new XMLHttpRequest();
xhr.open('GET','https://reqres.in/api/users')
xhr.onload=function(){
    if(this.status==200){
        var users=JSON.parse(this.response);
        console.log(users.data)
        buildTable(users.data)
    }
}
xhr.send()
function buildTable(data){
    var table = document.getElementById('myTable')
    for(var i=0;i<data.length; i++){
                var id = data[i].id;
                var firstname = data[i].first_name;
                var lastname = data[i].last_name;
                var email = data[i].email;
                var avatar = data[i].avatar;
                var row = "<tr>" +
                    "<td align='center'>" + (i+1) + "</td>" +
                    "<td align='center'>" + firstname + "</td>" +
                    "<td align='center'>" + lastname + "</td>" +
                    "<td align='center'>" + email + "</td>" +
                    "<td align='center'><img src='" + avatar + "'></td>" +
                    "</tr>";
                table.innerHTML+=row;
    }
}