

function getColumn(name){
return $('[aria-label*="'+name+'"]').parents('.js-list.list-wrapper');
}

function getMemberPoint(name,columnName){

var Column = getColumn(columnName);
var Card = Column.find('.js-member-on-card-menu *[title*="'+name+'"]').parents('.list-card');
var Point = 0;
Card.each(function(){
var p = $(this).find('.point-count').text() || 0
Point+= parseFloat(p)
})
return Point;
}

function getColumnPoint(c_name){
	var p = getColumn(c_name).find('.list-total .points').text() || 0;
	return parseFloat(p);
}


function createText(c_name,member_name){
	getColumn(c_name).find('.newNeigbuyLabel').remove();
	var p = getMemberPoint(member_name,'Development')
	var label_1 = $('<span>').addClass('card-label card-label-purple mod-card-front').text('DEV :'+ p);
    

	var p = getMemberPoint(member_name,'Test')
	var label_2 = $('<span>').addClass('card-label card-label-blue mod-card-front').text('Test :'+ p);
	
	var newLabel = $('<span>').addClass('newNeigbuyLabel').append(label_1).append(label_2);
    getColumn(c_name).find('.list-header').append(newLabel)
}



function addnewNeigbuyLabel(){
	if($('.board-header  span.board-header-btn-text').first().text()!="dev"){
	return false;
	}
	$('.board-canvas .list-total').bind("DOMSubtreeModified",function(){
		createText('To do - Joe','Joe Lee')
		createText('To do - Kelvin','Kelvin')
		createText('To do - Felix','Felix Hui')
		createText('To do - Pax','Pax K')
		createText('To do - Tony','tony')
	})
	}

	
	
setTimeout(addnewNeigbuyLabel, 2000);






var MemberPoint = {
j:getMemberPoint('Joe Lee'),
K:getMemberPoint('Kelvin'),
F:getMemberPoint('Felix Hui'),
P:getMemberPoint('Pax K'),
T:getMemberPoint('tony'),
}





$('mydiv').bind("DOMSubtreeModified",function(){
  alert('changed');
});


