$(document).ready(function(){
    var plusMinus = 0;
    var count = 0;
    var res = "";

    $('.bt').click(function(){
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
    $('.zero').click(function(){
        if($('.input').text()[0]!=0){
            $('.input').text($('.input').text()+this.innerText);
        }
    });
    $('.clear').click(function(){
        $('.input').text("");
    });
    $('.res').click(function(){
        $('.input').text(eval($('.input').text()));
        console.log(1);
    });
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
});