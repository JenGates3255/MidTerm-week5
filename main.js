var myItem = [
	{	
		catagory: 'tops',
		type:'tank',
		color:'purple',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/tops/tanks/tank.jpg'
	},
	{
		catagory: 'tops',
		type:'tank',
		color:'black',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/tops/tanks/tank%202.jpg" alt="blackTank'
	},
	{
		catagory: 'tops',
		type:'long sleeve',
		color: 'black',
		img: 'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/tops/longslv/long%20sleeve%20t.jpg'
	},
	{
		catagory: 'tops',
		type:'long sleeve',
		color:'blue',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/tops/longslv/long%20sleeve%20t%202.jpg'
	},
	{
		catagory: 'tops',
		type:'short sleeve',
		color:'black',
		img:'ile:///Users/jgates/Pictures/MIDTERM-PHOTOS/tops/shortslv/short%20sleeve%20t.jpg'
	},
	{
		catagory: 'tops',
		type:'short sleeve', 
		color:'teal',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/tops/shortslv/short%20sleeve%20t%202.jpg'
	},
	{
		catagory:'bottoms',
		type:'pants',
		color:'black',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/pants/pants.jpg'
	},
	{
		catagory:'bottoms',
		type:'pants',
		color:'beige',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/pants/pants%202.jpg'
	},
	{
		catagory:'bottoms',
		type:'pants',
		color:'denim',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/pants/pants%203.jpg'
	},
	{
		catagory:'bottoms',
		type:'shorts',
		color:'denim',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/shorts/shorts.jpg'
	},
	{
		catagory:'bottoms',
		type:'skirts',
		color:'black',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/skirts/skirt.jpg'
	},
	{
		catagory:'bottoms',
		type:'skirts',
		color:'white',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/skirts/skirt%203.jpg'
	},
	{
		catagory:'bottoms',
		type:'skirts',
		color:'black',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/bottoms/skirts/skirt%202.jpg'
	},
	{
		catagory:'dresses',
		type: 'long',
		color:'pink',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/dresses/long%20/long%20dress.jpg'
	},
	{
		catagory:'dresses',
		type:'long',
		color:'white',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/dresses/long%20/long%20dress%202.jpg'
	},
	{
		catagory:'dresses',
		type:'short',
		color: 'red',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/dresses/short/short%20dress%204.jpg'
	},
	{
		catagory:'dresses',
		type:'short',
		color:'pink',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/dresses/short/short%20dress.jpg'
	},
	{
		catagory:'dresses',
		type:'short',
		color:'white',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/dresses/short/short%20dress%203.jpg'
	},
	{
		catagory:'dresses',
		type:'short',
		color:'black',
		img:'file:///Users/jgates/Pictures/MIDTERM-PHOTOS/dresses/short/short%20dress%202.jpg'
	},
];
 


$(document).on('ready', function() {

	$('.closetImage').delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
    console.log('img')
}); 
  
});