$(function(){
	var i = 0;
	setInterval(function(){
		if( i == $('.banner_list li').length-1){
			i = 0
		}else{
			i++
		}
		$('.banner_list li').hide();
		$('.banner_list li').eq(i).show();
		$('.banner_list1 li span').removeClass('active');
		$('.banner_list1 li span').eq(i).addClass('active');
		console.log(i)
	},3000)
})
