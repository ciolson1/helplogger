ct = document.getElementById('comment-holder');
if (ct) {
	b = ct.getElementsByTagName("p");
	for (i = 0; i < b.length; i++) {
		if (b.item(i).getAttribute('multimedia') == 'comment-content') { 
_str = b.item(i).innerHTML.replace(/:\)\)/gi, "<img src='http://2.bp.blogspot.com/-Ph2wxEvy2mc/UTIr8-fdHjI/AAAAAAAABAo/3use2PsPhMA/s1600/taunt.gif' alt='' class='multimedia'/>"); 
_str = _str.replace(/=d&gt;/gi, "<img src='http://1.bp.blogspot.com/-8C5UH12mxf0/UTIzmsxczDI/AAAAAAAABDA/2seHdqLVQ6Q/s1600/suicide.gif' alt='' class='multimedia'/>"); 
_str = _str.replace(/:d/gi, "<img src='http://4.bp.blogspot.com/-lhTywmMZ58E/UTI04kjJ3WI/AAAAAAAABDY/qNgtijEr_E8/s1600/biggrin.gif' alt='' class='multimedia'/>"); 
_str = _str.replace(/:img:/gi, "<img src='"); 
_str = _str.replace(/:eimg:/gi, "' width=150px class='multimedia'>"); 
_str = _str.replace(/:youtube:/gi, "<embed src='//www.youtube.com/v/"); 
_str = _str.replace(/:eyoutube:/gi, "?hl=zh_TW&amp;version=3' type='application/x-shockwave-flash' width='400' height='225' allowscriptaccess='always' allowfullscreen='true'></embed>");
b.item(i).innerHTML = _str; 
} 
} 