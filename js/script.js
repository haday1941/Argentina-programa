function Alt(id) {
	let Bloque = document.getElementById(id);
	if (Bloque.style.display === "none") {
		Bloque.style.display = "block";
	} else {
		Bloque.style.display = "none";
	}
}

//function AltBoton(Estado){
//	let Leg = Estado;
//	if (Estado !== "BotonAct") {
//		document.getElementById(Estado).id="BotonAct";
//	} else {
//		document.getElementById(Estado).id="Leg";
//	}
//}
//  funcion para que el boton quede apretado, no cosigo desactivarla despues asi que
//  la cambie por button:active