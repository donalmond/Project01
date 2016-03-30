//
var storeScore = function(score) {
//
// }
// var app = app || {}
//
//
//
    $.ajax({
      url: "/highscores",
      method: "POST",
      dataType: "JSON",
      data: {
        highscore: {
          score: score,
          user_id: gon.user_id
        }
      },
      success:function(data){
        console.log(data);
      }
    })
}
//
//


// /
// class PagesController < ApplicationController
//   def show
//     @scores = Score.order(score: :desc).limit(5)
//   end
// end
