$(function() {
    $('div.spinner-demo.black').spinner();
    $('div.spinner-demo.pink').spinner({ 
    	colour : '255,20,147',
    	spokes : 10
    });
    $('div.spinner-demo.large').spinner({ 
    	colour : '0,255,255',
    	spokes : 22
    });
});