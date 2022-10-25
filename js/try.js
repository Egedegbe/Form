function demo(){
    var name=document.getElementById('name').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    var conpass=document.getElementById('conpass').value
    var error=document.getElementById('error')
    var txt;
error.style.padding='5px'

if(name.length<10){
txt='name is too short'
error.innerHTML=txt
return false
}
else if(email.indexOf('@')==-1 && email.length<10){
    txt='email is not valid'
    error.innerHTML=txt
    return false
}

else if(password.length<8){
    txt='password is too short'
    error.innerHTML=txt
    return false
}
else if(conpass !=password){
    txt='password does not match'
    error.innerHTML=txt
    return false
}
    alert('form submission successful')
    return true
}

localStorage.setItem('name','runo')
console.log(localStorage)