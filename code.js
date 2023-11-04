function mostrarURL(){

    var url = window.location.href;  
    document.getElementById('recurso').value = url;
}

function mostrarContenidos(){
    
    var xmlhttp=new XMLHttpRequest();  
    var url = document.getElementById('recurso').value;

    xmlhttp.onreadystatechange=function() {
        
        document.getElementById("estados").innerHTML=document.getElementById("estados").innerText + xmlhttp.readyState+ '- '+getStateText(xmlhttp.readyState) +'<br/>';
        if (xmlhttp.readyState==4 && xmlhttp.status==200) { 

            document.getElementById("cabeceras").innerHTML=xmlhttp.getAllResponseHeaders();
            document.getElementById("codigo").innerHTML=xmlhttp.status;
            document.getElementById("contenidos").innerHTML=xmlhttp.responseText;   
            
        }      
    }
    //xmlhttp.open("GET","https://martabdelarocha.github.io/MyBlog/about.html",true);
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
 
    
}
function getStateText(state){
    var valor='';
    switch(state){
        case 1:
            valor='Opened';
            break;
        case 2:
            valor='Headers Received';
            break;
        case 3:
            valor='Loading';
            break;
        case 4:
            valor='Done';
            break;
    }
    return valor;
}