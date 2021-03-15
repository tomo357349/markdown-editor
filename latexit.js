var LatexIT = {
	pre: function (txt) {
		if (!txt.match(/<img.*?>/i)) {
			txt = txt.replace(/<br>/mgi, '');
			txt = txt.replace(/<br \/>/mgi, '');
			// txt = ' <img src="http://latex.codecogs.com/gif.latex?' + txt + '\" /> ';
			txt = ' <img src="http://latex.codecogs.com/svg.latex?' + txt + '\" /> ';
			// txt = ' <object type="image/svg+xml" width="20" data="http://latex.codecogs.com/svg.latex?' +  txt + '" /> ';
		}
		return txt;
	},
	render: function (tag) {
		var elcollection = document.getElementsByTagName(tag);
		Array.prototype.forEach.call(elcollection, function (e) {
			if (e.getAttribute("class") == "lang-latex" || e.getAttribute("xml:class") == "lang-latex")
				e.innerHTML = LatexIT.pre(e.innerHTML);
		});
	}
};