

function validate() {

    var name=document.getElementById("#name").value;
    var number=document.getElementById("#number").value;
    var address=document.getElementById("#address").value;

    if(name || number || address=="text")
    {
        alert("order is placed")
        return false;
    }

 
}