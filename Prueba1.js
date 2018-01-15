

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        ArmarMenu(this);
    }
};

xhttp.open('GET', 'XML/Enlaces.xml', true);
xhttp.send();

function ArmarMenu(xml)
{
     var _xmldatos,_datos;
     _xmldatos = xml.responseXML;
     _datos = _xmldatos.getElementsByTagName("Link");
     _cantidaddatos = _datos.length;
      
     alert(_cantidaddatos);

}