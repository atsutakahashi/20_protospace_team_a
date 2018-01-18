$(document).on('turbolinks:load', function(){
  $(function() {
  $("#prototype_captured_images_attributes_0_content").change(function() {
    var file = this.files[0];
    var fileReader = new FileReader();

    if (!file.type.match('image.*')) {
        alert("画像ファイルを選択してください。");
        return true;
      };

    fileReader.onload = function(e) {
      var imageUri = e.target.result;
      $(".upload-file-0").replaceWith( '<img class = "upload-file-0" src= "' + imageUri + '">' );
    };
    fileReader.readAsDataURL(file);
  });
  });

  $(function() {
    $("#prototype_captured_images_attributes_1_content").change(function() {
      var file = this.files[0];
      var fileReader = new FileReader();

      fileReader.onload = function(e) {
        var imageUri = e.target.result;
        $(".upload-file-1").replaceWith( '<img class = "upload-file-1" src = "' + imageUri + '">' );
      };
      fileReader.readAsDataURL(file);
    });
  });

  $(function() {
    $("#prototype_captured_images_attributes_2_content").change(function() {
      var file = this.files[0];
      var fileReader = new FileReader();
      fileReader.onload = function(e) {
        var imageUri = e.target.result;
        $(".upload-file-2").replaceWith( '<img class = "upload-file-2" src= " ' + imageUri + '">' );
      };
      fileReader.readAsDataURL(file);
    });
  });

  $(function() {
    $("#prototype_captured_images_attributes_3_content").change(function() {
      var file = this.files[0];
      var fileReader = new FileReader();
      fileReader.onload = function(e) {
        var imageUri = e.target.result;
        $(".upload-file-3").replaceWith( '<img class = "upload-file-3" src = "' + imageUri + '">' );
      };
      fileReader.readAsDataURL(file);
    });
  });
});

