_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var myItem = [

	{	
		name: 'purple tank',
		category: 'tops',
		type:'tank',
		color:'purple',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/tops/tanks/tank.jpg'
	},
	{
		name: 'black tank',
		category: 'tops',
		type:'tank',
		color:'black',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/tops/tanks/tank%202.jpg" alt="blackTank'
	},
	{
		name: 'black striped',
		category: 'tops',
		type:'long-sleeve',
		color: 'black',
		img: 'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/tops/longslv/long%20sleeve%20t.jpg'
	},
	{
		name:'blue slouchie',
		category: 'tops',
		type:'long-sleeve',
		color:'blue',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/tops/longslv/long%20sleeve%20t%202.jpg'
	},
	{
		name:'California tee',
		category: 'tops',
		type:'short-sleeve',
		color:'black',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/tops/shortslv/short%20sleeve%20t.jpg'
	},
	{
		name:'teal short sleeve',
		category: 'tops',
		type:'short-sleeve', 
		color:'blue',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/tops/shortslv/short%20sleeve%20t%202.jpg'
	},
	{
		name: 'black slacks',
		category:'bottoms',
		type:'pants',
		color:'black',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/pants/pants.jpg'
	},
	{
		name:'khaki slacks',
		category:'bottoms',
		type:'pants',
		color:'beige',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/pants/pants%202.jpg'
	},
	{
		name:'jeans',
		category:'bottoms',
		type:'pants',
		color:'denim',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/pants/pants%203.jpg'
	},
	{
		name:'jean shorts',
		category:'bottoms',
		type:'shorts',
		color:'denim',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/shorts/shorts.jpg'
	},
	{
		name: 'black mini skirt',
		category:'bottoms',
		type:'skirts',
		color:'black',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/skirts/skirt.jpg'
	},
	{
		name:'white pencil skirt',
		category:'bottoms',
		type:'skirts',
		color:'white',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/skirts/skirt%203.jpg'
	},
	{
		name:'black skater skirt',
		category:'bottoms',
		type:'skirts',
		color:'black',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/skirts/skirt%202.jpg'
	},
	{
		name:'pink maxi',
		category:'dresses',
		type: 'long-dress',
		color:'pink',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/dresses/long%20/long%20dress.jpg'
	},
	{
		name:'white maxi',
		category:'dresses',
		type:'long-dress',
		color:'white',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/dresses/long%20/long%20dress%202.jpg'
	},
	{
		name:'floral dress',
		category:'dresses',
		type:'short-dress',
		color: 'red',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/dresses/short/short%20dress%204.jpg'
	},
	{
		name:'pink short dress',
		category:'dresses',
		type:'short-dress',
		color:'pink',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/dresses/short/short%20dress.jpg'
	},
	{
		name:'white short dress',
		category:'dresses',
		type:'short-dress',
		color:'white',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/dresses/short/short%20dress%203.jpg'
	},
	{
		name:'black short dress',
		category:'dresses',
		type:'short-dress',
		color:'black',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/dresses/short/short%20dress%202.jpg'
	},
];

_.each(myItem, function(item) {
	item.id = _.uniqueId('item');
});
 
var colTemplate = '\
	<div id="{{ id }}" class="fullImage col-md-2">\
      <a href="#" class="thumbnail">\
        <img class="closetImage" src="{{ img }}" alt="{{ name }}">\
      </a>\
      <button class="largerView btn btn-primary btn-sm" data-toggle="modal" data-target="#{{ id }}Modal">\
        Larger View\
      </button>\
       <div class="modal fade" id="{{ id }}Modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
        <div class="modal-dialog">\
          <div class="modal-content">\
            <div class="modal-header">\
              <button type="button" class="close" data-dismiss="modal">\
              </button>\
            </div>\
            <div class="modal-body text-center">\
             <img class="modalImage" src="{{ img }}" alt="{{ name }}">\
            </div>\
            <div class="modal-footer">\
                <button type="button" class="btn btn-danger">Delete Item</button>\
                <button type="button" class=" btn btn-info" data-dismiss="modal">Close</button> \
             </div>\
          </div>\
        </div>\
      </div>\
    </div>';


$(document).on('ready', function() {

// .each- acts as 'for loop' but with underscore
// 'item' parameter is object literal of myItem 
	_.each(myItem, function(item) {
//calling underscore .template method- dynamically 		
		var template = _.template(colTemplate);
		$('#catalogItems .row').append(template(item));
	});

// selecting from menu items on sidebar
	$('.selectedCategory').on('click', function(){
		 var type = $(this).attr("data-type");
		 console.log(type);

		 _.each(myItem, function(item) {
			if(type === item.type){
				$('#' + item.id).show();
			}
			else {
				$('#' + item.id).hide();
			}
		 });
	});

}); //end of doc.on ready









