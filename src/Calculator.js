$(document).ready(function(){
    
    // 시간 출력
    setInterval(showTime,1000);
    function showTime(){
        var date = new Date();
        console.log(date.toLocaleTimeString());
        $('.top_left').text(date.toLocaleTimeString());
    }
    
    // 버튼 눌렀을때 
    $('.bt').click(function(){
        if($('.input').text()!="" || this.innerText == '+' || this.innerText == '-' || this.innerText == '*' || this.innerText == '/'){
            if($('.input').text()[$('.input').text().length-1] == '+' || $('.input').text()[$('.input').text().length-1] == '-' || $('.input').text()[$('.input').text().length-1] == '*' || $('.input').text()[$('.input').text().length-1] == '/'){
               if(this.innerText == '/' || this.innerText == '-' || this.innerText == '+' || this.innerText == '*'){
                   $('.input').text($('.input').text().substring(0,$('.input').text().length-1));
               }
            }
        }
        
        if($('.input').text()==""){
            if(this.innerText == '/' || this.innerText == '-' || this.innerText == '+' || this.innerText == '*' ||  this.innerText == '%')
                return  
        }
        if($('.input').text()[0]==0){
            $('.input').text("");
            $('.input').text($('.input').text()+this.innerText);
        }
        else{
            $('.input').text($('.input').text()+this.innerText);
        }
    });

    // 0은 첫글자가 0이면 반응 x
    $('.zero').click(function(){
        if($('.input').text()[0]!=0){
            $('.input').text($('.input').text()+this.innerText);
        }
    });

    // AC 버튼
    $('.clear').click(function(){
        $('.input').text("");
    });

    // 계산 버튼
    $('.res').click(function(){
        $('.input').text(eval($('.input').text()));
    });

    // +/- 버튼
    $('.minus').click(function(){
        if($('.input').text()[0]=='-'){
            $('.input').text('+'+$('.input').text().substring(1));
        }
        else if($('.input').text()[0]=='+'){
             $('.input').text('-'+$('.input').text().substring(1));
        }
        else{
            $('.input').text('-'+$('.input').text());
        }
    });

    // % 버튼
    $('.per').click(function(){
        $('.input').text(eval($('.input').text()+'/100'));
    });
});
