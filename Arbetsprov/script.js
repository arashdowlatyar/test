$(document).ready(function(){

    $('.chat_head').click(function(){
        $('.chat_body').toggle('slow');
    });

     $('.msg_head').click(function(){
        $('.msg_wrap').toggle('slow');
    });

    $(".close").click(function(){
        $('.msg_box').hide();
    });

    $('.messi').click(function(){
        $('.msg_wrap').show();
        $('.msg_box').show();
    })

    $('textarea').keypress(function(e){
        if(e.keyCode == 13){
           var msg = $(this).val();
           $(this).val('');
           $(this).offsetParent().find('.msg_insert').append('<div class="msg_a">' + msg + '</div>');
           $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
        }

        if (msg === 'Hej') {
            $(this).offsetParent().find('.msg_insert').append('<div class="msg_b">Upptagen, Skriv till Suarez</div>');
        }

        if (msg === 'hur mår du') {
            $(this).offsetParent().find('.msg_insert').append('<div class="msg_b">inte här, Neymar kanske svarar. "</div>');
        }
        if (msg === 'Är du där?') {
            $(this).offsetParent().find('.msg_insert').append('<div class="msg_b">Puyol är alltid online, Pröva där</div>');
        }
        if (msg === 'Hej Puyol') {
            $(this).offsetParent().find('.msg_insert').append('<div class="msg_b">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años</div>');
        }
    });
});



$(document).ready(function(){
    
     $('.msg_head_suarez').click(function(){
        $('.msg_wrap_suarez').toggle('slow');
    });

    $(".close_suarez").click(function(){

        $('.msg_box_suarez').hide();
    });

    $('.suarez').click(function(){
        $('.msg_wrap_suarez').show();
        $('.msg_box_suarez').show();
    })
    
   
});

$(document).ready(function(){


     $('.msg_head_neymar').click(function(){
        $('.msg_wrap_neymar').toggle('slow');
    });

    $(".close_neymar").click(function(){

        $('.msg_box_neymar').hide();
    });

    $('.neymar').click(function(){
        $('.msg_wrap_neymar').show();
        $('.msg_box_neymar').show();
    })


});


$(document).ready(function(){

     $('.msg_head_puyol').click(function(){
        $('.msg_wrap_puyol').toggle('slow');
    });

    $(".close_puyol").click(function(){

        $('.msg_box_puyol').hide();
    });

    $('.puyol').click(function(){
        $('.msg_wrap_puyol').show();
        $('.msg_box_puyol').show();
    })


});
