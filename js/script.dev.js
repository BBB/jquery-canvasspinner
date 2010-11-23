$(function() {
    $('div.spinner.black').spinner();
    $('div.spinner.pink').spinner({ 
    	colour : '255,20,147',
    	spokes : 10
    });
    $('div.spinner.large').spinner({ 
    	colour : '0,255,255',
    	spokes : 22
    });
});