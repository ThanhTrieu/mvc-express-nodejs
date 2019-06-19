$(function(){
    $('#avatar').on('change',function(e){
        var inputFiles = e.target.files;
        var inputFile = inputFiles[0];
        var formData = new FormData();
        formData.append('avatar', inputFile);
        $.ajax({
            type: "POST",
            url: "/upload-avatar",
            data: formData,
            processData: false,
            contentType: false,
            success: function(r){
                console.log("result",r);
                $('#avatar_2').attr('src', '/storage/images/' + r.result);
            },
            error: function (e) {
                console.log("some error", e);
            }
        });
    });
});