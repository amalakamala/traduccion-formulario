function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";
}



translate();


var button = document.getElementsByClassName("btn")[0];
button.addEventListener("click",function(e){
	e.preventDefault();
	respuesta.innerHTML = "<h3>Datos de Formulario</h3><br><p><b>Correo Electrónico :</b><br>" + document.getElementById("inputEmail").value + "<br><b>Password :</b><br>" + document.getElementById("inputPassword").value + "</p>";
})

/*
function res(){
	var email = document.getElementById("inputEmail").value;
	user.innerHTML = "<h3>Datos de Formulario</h3>" + "El correo electronico ingresado es" + "<br>" + email;
}

html:
 <button class="btn btn-lg btn-primary btn-block submit-btn" type="submit" onclick="res(); return false">Sign in</button>
      </form>
          <div id="user"></div>
    </div> 
*/
