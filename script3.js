$(document).ready(function(){
    $.getJSON('data2.JSON',function(data){
        $.each(data,function(index, user){
            $('#user-table tbody').append('<tr><td>'+user.reg_no+'</td><td>'+user.name+'</td><td>'+user.email+'</td><td>'+user.phone+'</td><td>'+user.ADD+'</td></tr>');

        });
    });
});