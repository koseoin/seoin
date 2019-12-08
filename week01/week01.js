$(document).ready(function () {
     var textnm=[];
    $('#btn_quiz_start').click(function (){
      $('#quiz_start').hide();
      $(".con_qz_1").show();
    })
    $(".btn_next").click(function (){
      // var number = $(this).parent().parent().attr('class').split("qz_")[1];
      var number = $(this).parent().parent().attr('class').split("_")[2]; // this가 포인트!!
      
      // if (!$("input:radio[name=qz"+number+"]").is(":checked")){
      //   alert('체크해주세요');
      //   return;
      // }
      console.log(number);
          $('.con_qz_' + number).hide();
          $('.con_qz_' + ++number).show();
      // }
           // 중요!!
    // $(".btn_next").click(callback함수);
    // callback함수는 내가 실행하는게 아니고 javascript나 다른 함수가 실행시키는 함수가
    // 함수의 형태만 만들어서 넘겨주면 실행이 나중에 됨
    // 내가 실행실행하는거는 => myFun(); 
    

    // console.log("input:radio").is(":checked");
    });
    $(".answer_check").click(function(){
      var no = $(this).data("no");
      $(this).parent().toggleClass('on');
     
      if($(this).parent().hasClass('on')){
      textnm.push(no);
     }else{
      var dele =textnm.indexOf(no);
      textnm.splice(dele,1);
     };
      console.log(textnm);
      var textVal = "";
      textnm.forEach(function(e){
        
        // console.log(e);
        console.log($('.con_qz_6 .seq_area li').eq(e-1).text());
        textVal = textVal + $('.con_qz_6 .seq_area li').eq(e-1).text();
      });
      $(".show_seq").text(textVal);

      console.log('1111');

    });
      
    $(".mr5.btn_prev").click(function(){
      var num = $(this).parent().parent().attr('class').split("_")[2]; 
      console.log(num);
        $('.con_qz_' + num).hide();
        $('.con_qz_' + --num).show();
    }); 

      console.log($(".qz3_ck1 > input:radio[value=1]").is(":checked"));
      $(".qz3_ck2 > input:radio[value=2]").is(":checked");
      $(".qz3_ck3 > input:radio[value=3]").is(":checked");

});
