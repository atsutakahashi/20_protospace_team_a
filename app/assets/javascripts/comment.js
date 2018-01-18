$(document).on('turbolinks:load', function(){
    function buildHTML(comment){
    var html = `<p>
                  <strong>
                    <a href = ${comment.id}>${comment.user_name}</a>
                    :
                   ${comment.text}
                  </strong>
                </p>`
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
});