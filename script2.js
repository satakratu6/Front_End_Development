$(document).ready(function(){
    $.getJSON('data.JSON',function(data){
        $.each(data,function(index, user){
            $('#user-table tbody').append('<tr><td>'+user.id+'</td><td>'+user.name+'</td><td>'+user.age+'</td><td>'+user.dep+'</td><td>'+user.ADD+'</td></tr>');

        });
    });
});