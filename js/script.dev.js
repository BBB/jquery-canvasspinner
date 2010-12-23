$(function() {
    $('li#spinner-black div').spinner();
    $('li#spinner-moving div').spinner({ 
    	colour : '22,22,22',
    	spokeCount : 10,
    	spokeWidth : 3
    });
    $('li#spinner-large div').spinner({ 
    	colour : '255,255,255',
    	spokeWidth : 5,
    	spokeCount : 12
    });
    $('li#spinner-round div').spinner({ 
    	colour : '255,255,255',
    	spokeCount : 10,
    	spokeWidth : 3,
		rotation : 4,
		spokeOffset : {
			inner : 8,
			outer : 15
		}
    });
});