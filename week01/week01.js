$(document).ready(function () {
    $('#btn_quiz_start').click(function (){
      $('#quiz_start').hide();
      $(".con_qz_1").show();
    })
    $(".btn_next").click(function (){
      var number = $(this).parent().parent().attr('class').split("qz_")[1];
           $('.con_qz_' + number).hide();
          $('.con_qz_' + ++number).show(); 
           console.log(number); 
           })
      // $(".quiz_btn").click(function (){
      //   $(".con_qz_2").hide();
      //   $(".con_qz_3").show();
      // })
      // $(".quiz_btn").click(function (){
      //   $(".con_qz_3").hide();
      //   $(".con_qz_4").show();
      // })
    //   $(".con_qz_2").show();
    //   $(".con_qz_2").hide();
    //   $(".con_qz_3").show();
    //   $(".con_qz_3").hide();
    //   $(".con_qz_4").show();
    //   $(".con_qz_4").hide();
    //   $(".con_qz_5").show();
    //   $(".con_qz_5").hide();
    //   $(".con_qz_6").show();
    //   $(".con_qz_6").hide();
    //   $(".con_qz_7").hide();
    //   $(".con_qz_7").hide();
    })
