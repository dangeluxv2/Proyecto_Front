/////////// GET, POST, PUT, DELETE

function getReservaciones(){

}

function postReservaciones(){
    
}

function putReservaciones(){
    
}

function deleteReservaciones(){
    
}


function getTool_Reservaciones(){
    $.ajax({
        url:"http://localhost:8080/api/Tool/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
           // console.log(respuesta);
            let $select = $("#select-tool");
            $.each(respuesta, function (id, name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
            })
        }
    });
}