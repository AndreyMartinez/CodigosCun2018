
function reloadPage(pag) {
    console.log(pag)
    $.ajax({
        url: pag,
        data:"a=1",
        type: 'POST',
        dataType:'html',
    success : function(data) {
        console.log(data)
        $('#content').html(data)
    },
    error : function(xhr, status) {
        alert('Disculpe, existió un problema');
    },
})
}
