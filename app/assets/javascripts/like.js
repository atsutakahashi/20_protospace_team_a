// $(document).on('turbolinks:load', function(){
//   $("#like-btn").on("click", function(e){
//     var sum = $("#like-sum")
//     var heart = $("#like-btn img")
//     var id = $(".img-responsive").data("prototype-id");
//     e.preventDefault();
//     like_function(id, $(this), heart, sum)
//   })

//   function like_function(id, button, heart, sum) {

//   if (button.hasClass("like-decrement")) {
//     var pathName = location.pathname
//     var like_url = pathName + /likes/#{like.id}
//     $.ajax({
//       url: like_url,
//       type: "DELETE",
//       data: {prototype_id: id},
//       dataType: "json"
//     })

//     .done(function(data) {
//       button.removeClass("like-decrement").addClass("like-increment")
//       heart.attr("src", "/assets/icon_gray_heart.svg")
//     //    var a = (parseInt(sum) - 1);
//     //   $("#like-sum").text(a);
//     // });
//   })
//     }else{
//       var pathName = location.pathname
//       $.ajax({
//       url: pathName + "/likes/",
//       type: "POST",
//       data: {prototype_id: id},
//       dataType: "json"
//     })
//     .done(function(data) {
//       button.removeClass("like-increment").addClass("like-decrement")
//       heart.attr("src", "/assets/icon_red_heart.svg")
//       // var a = (parseInt(sum) + 1);
//       // $("#like-sum").text(a);
//     })
//     }
//   }
// })

