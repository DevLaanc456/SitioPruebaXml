var xhttp;
var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var btnspan = document.getElementById('cerrar');
var btnmaster = document.getElementsByClassName('action');
xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};

xhttp.open("GET", "XML/ControlInternos.xml", true);
xhttp.send();

btn.addEventListener("click", function() {
    AbrirModal("abrir");
});

btnspan.addEventListener("click", function() {
    AbrirModal("cerrar");
});



function AbrirModal(modo) {
    if (modo == "abrir") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

function myFunction(xml) {
    var x, i, txt, td, xmlDoc;
    xmlDoc = xml.responseXML;
    txt = "";
    td = "";
    x = xmlDoc.getElementsByTagName("ControlInterno");
    xlen = x.length;
    for (i = 0; i < xlen; i++) {
        y = x[i].firstChild;
        xlennode = x[i].childNodes.length;
        var tr = document.createElement('tr');
        for (d = 0; d < xlennode; d++) {
            if (y.nodeType == 1) {

                if (y.nodeName == "NOMBRE") {
                    td = tr.appendChild(document.createElement('td'));
                    td.innerHTML = y.textContent || y.innerHTML;
                }

                if (y.nodeName == "DESCRIPCION") {

                    td = tr.appendChild(document.createElement("td"));
                    td.innerHTML = y.textContent || y.innerHTML;
                }

            }
            y = y.nextSibling;
        }
        document.getElementById("tblname").appendChild(tr);
    }
}