function AddData(){
    var nom=((document.getElementById('nombre')||{}).value)||"";
    var ape=((document.getElementById('apellido')||{}).value)||"";
    var tel=((document.getElementById('telefono')||{}).value)||"";
    /*if (nom != null) {
        str = nom.value;
    }
    else {
        str = null;
    }
    if (ape != null) {
        str = ape.value;
    }
    else {
        str = null;
    }
    if (ape != null) {
        str = ape.value;
    }
    else {
        str = null;
    }*/

    let contact = {nombre: nom, apellido: ape, telefono: tel};
    fetch("http://www.raydelto.org/agenda.php", {
        method:'POST',
        body:JSON.stringify(contact)}
        ).then( answer => answer.json()).then(
            (answer) =>
            {
                alert('CONTACTO PUBLICADO DE FORMA EXITOSA')
            }
        );
}