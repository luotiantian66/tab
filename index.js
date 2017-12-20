
$('.blk').on('click',
function(){
	$(this).addClass('active')
	$(this).siblings('.blk').removeClass('active')
	$(this).parent('.header').next('.content').children('.panel').eq($(this).index()).addClass('active')
	$(this).parent('.header').next('.content').children('.panel').eq($(this).index()).siblings().removeClass('active')
})



