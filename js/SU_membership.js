 function show_login() {
    var x = document.getElementById('popup');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

  function authenticate(){
    
    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if(username == "swagunit@gmail.com" && password == "limHensem123"){
      alert ("Welcome back MR Lim !");
      window.location = "../html/SU_account.html"; // Redirecting to other page.
      return false;
    }
    else{
      alert("Login unsuccessful");
      return false;
    }

  }