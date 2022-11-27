
//edit student
$("#Update-user").submit(function(event){
    event.preventDefault();

    var unindexed_array=$(this).serializeArray();
    var data={}
    $.map(unindexed_array,function(n,i) {

        data[n['name']]=n['value']
    })
    console.log(data);

    var request={
        "url":`http://localhost:80/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Succesfully")
    })
})


//delete student
if(window.location.pathname=="/viewall"){
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")
        var request={
            "url":`http://localhost:80/api/user/${id}`,
            "method":"DELETE"
        }
        if(confirm("Do you want to delete")){
            $.ajax(request).done(function(response){
                alert("Data Updated Succesfully");
                location.reload();

            })
        }

    });
}
