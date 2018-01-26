$(document).on('turbolinks:load', function(){
  function buildHTML(comment){
  var html = '<p>' +
                '<strong>' +
                  comment.user_name +
                  " " +
                  comment.text +
                  " " +
                  '<a class = "edit-function" data-method = "get" href = /prototypes/'+ comment.prototype_id +'/comments/' + comment.id + '/edit ">編集</a>' +
                  " " +
                  '<a class = "delete-function" data-remote= "true" rel= "nofollow" data-method= "delete" href =/prototypes/'+ comment.prototype_id +'/comments/'+ comment.id +'>削除</a>' +
                '</strong>' +
              '</p>';
  return html;
  }

  $('#new_comment').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var comment = $('.textbox').val();
    var url = $(this).attr('action')

     if (comment.length ==0){
        alert('Please input comment!!');
        return false;
     }

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.comments-list').append(html)
      $('.textbox').val('')
    })

    .fail(function(){
      alert('Please input comment!!');
    })
  })
  $('delete-function').on('click', function(e){
    e.preeventDefault();
    $(event.target).remove();
  })
});