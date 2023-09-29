var phoneMode = window.innerWidth < 480;

mermaid.initialize({
	startOnLoad: false,
	theme: 'neutral', // forest, dark, neutral, default
	logLevel: 3,
	securityLevel: 'loose',
	flowchart: {
		// width: '100%',
		// curve: 'basis'
	},
	gantt: {
		// width: '100%',
		// barHeight: 20,
		// barGap: 4,
		axisFormat: '%m/%d' //'%H $W %m/%d/%Y'
	},
	sequence: {
		// width: '100%',
		// actorMargin: 50,
		// noteMargin: 10,
		// messageMargin: 35,
		// boxTextMargin: 5,
	},
});
mermaid.parseError = function (err, hash) {
	console.error(err);
};
function printTask(name) {
	console.log(name);
}

var ngapp = angular.module('example-app', []);
ngapp.controller('MainController', ['$scope', '$sce', '$timeout', function ($scope, $sce, $timeout) {
	var dummyimg = { name: '(drop an image file here)' };
	$scope.htmlHidden = true;
	$scope.hiddenText = false;
	$scope.hiddenView = phoneMode;
	$scope.model = {
		toc: false,
		todo: false,
		vw: 5,
		md: '# markdown text\n## text\nLorem _ipsum_ __dolor__ ~~sit~~ **amet**, <u>consectetur</u> adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua.<i class="fas fa-home"></i>\n\n## head 2\n### head 3\n#### head 4\n##### head 5\n\n## unordered list\n* aaa\n* bbbb\n\n## ordered list\n0. aaa\n0. bbbb\n\n## link\n[google](http://www.google.com)\n\n## todo\n- xxx\n+ yyy\n\n## table\n|id|name|\n|-:|----|\n|1|Taro|\n\n## blockquote\n> Note: aaa\n\n## code\n```js\nvar x = 0;\nconsole.log(x);\n```\n\n# math\n```math\nc = \\pm\\sqrt{a^2 + b^2}\n```\n\n<!--```latex\n\\sum_{i=1}^{n} x_i\nx=\frac{1} {2^n}\n```-->\n\n# uml\n## flowchart\n```uml\ngraph LR\nA[Start] --> B{Decision}\nB -->|false| C[/Execute/]\nB -->|true| D[/Stop/]\n```\n\n```uml\ngraph TB\nStart --> Stop\n```\n## class diagram\n```uml\nclassDiagram\nclassA <|-- classB : implements\nclassC *-- classD : composition\nclassE o-- classF : association\nCustomer "1" --> "*" Ticket\n```\n\n## sequence diagram\n```uml\nsequenceDiagram\nAlice->>+John: Hello John, how are you?\nJohn-->>-Alice: Great!\n```\n\n## state diagram\n```uml\nstateDiagram\n[*] --> s1\ns1 --> s2: A transition\ns2 --> [*]\n```\n\n## gantt\n```uml\ngantt\ntitle A Gantt Diagram\ndateFormat YYYY-MM-DD\nsection Section\nA task:done, a1, 2020-01-01, 30d\nAnother task:after a1, 20d\nsection Section2\nTask in sec:crit, s2t1, 2020-01-12, 12d\nsecond task:active, 24d\nclick s2t1 call printTask("x")```\n\n## ER\n```uml\nerDiagram\nCUSTOMER ||--o{ ORDER : places\nORDER ||--|{ LINE-ITEM : contains\nCUSTOMER }|..|{ DELIVERY-ADDRESS : uses```\n\n# flowchart\n\n```flow\nst=>start: START\ne=>end: END\nio1=>inputoutput: Stdin\ncond=>condition: isBlank?\nsub1=>subroutine: func1\nop1=>operation: i++\nst->io1->cond\ncond(yes)->sub1->e\ncond(no)->op1->e\n```\n\n# chart\n\n## bar chart\n```chart\n{\n  "type": "bar",\n  "width": 0,\n  "height": 0,\n  "margin": {\n    "left": 20,\n    "bottom": 20\n  },\n  "data": [\n    { "id": "item 1", "value": 10 },\n    { "id": "item 2", "value": 8 },\n    { "id": "item 3", "value": 13 }\n  ]\n}\n```\n\n## line chart\n```chart\n{\n  "type": "line",\n  "width": 0,\n  "height": 0,\n  "margin": {\n    "left": 20,\n    "bottom": 20\n  },\n  "scale": {\n    "x": "linear"\n  },\n  "data": [\n    { "id": 1, "value": 5 },\n    { "id": 5, "value": 8 },\n    { "id": 6, "value": 3 }\n  ]\n}\n```\n\n## doughnut chart\n```chart\n{  "type": "donut",\n  "width": 0,\n  "height": 0,\n  "margin": {\n    "left": 20,\n    "bottom": 20\n  },\n  "data": [\n    { "id": "item 1", "value": 10, "color": "red" },\n    { "id": "item 2", "value": 8 },\n    { "id": "item 3", "value": 13 }\n  ]\n}\n```\n\n## stacked-bar\n\n```chart\n{\n  "type": "stacked-bar",\n  "width": 0,\n  "height": 0,\n  "margin": {\n    "left": 20,\n    "bottom": 20\n  },\n  "domains": [\n    {"name": "x", "color": "red" },\n    {"name": "y" },\n    {"name": "z" }\n  ],\n  "data": [\n    { "id": "item 1", "domain": "x", "value": 10 },\n    { "id": "item 1", "domain": "y", "value": 1 },\n    { "id": "item 1", "domain": "z", "value": 5 },\n    { "id": "item 2", "domain": "x", "value": 8 },\n    { "id": "item 2", "domain": "y", "value": 3 },\n    { "id": "item 2", "domain": "z", "value": 2 },\n    { "id": "item 3", "domain": "x", "value": 13 },\n    { "id": "item 3", "domain": "y", "value": 6 },\n    { "id": "item 3", "domain": "z", "value": 1 }\n  ]\n}\n```\n\n## slope\n\n```chart\n{\n  "type": "slope",\n  "width": 0,\n  "height": 0,\n  "margin": {\n    "left": 20,\n    "bottom": 20\n  },\n  "domains": [\n    {"name": "x", "color": "red" },\n    {"name": "y" },\n    {"name": "z" }\n  ],\n  "data": [\n    { "id": "2020", "domain": "x", "value": 10 },\n    { "id": "2020", "domain": "y", "value": 1 },\n    { "id": "2020", "domain": "z", "value": 5 },\n    { "id": "2021", "domain": "x", "value": 8 },\n    { "id": "2021", "domain": "y", "value": 3 },\n    { "id": "2021", "domain": "z", "value": 2 }\n  ]\n}\n```\n\n## tree\n\n```chart\n{\n  "type": "tree",\n  "width": 0,\n  "height": 0,\n  "margin": {\n    "left": 20,\n    "bottom": 20\n  },\n  "data": {\n    "name": "root",\n    "children": [\n      { "name": "bin" },\n      { "name": "lib"},\n      { "name": "usr", "children": [\n        { "name": "bin" },\n        { "name": "local", "children": [\n          { "name": "bin" }\n        ]}\n      ]},\n      { "name": "opts", "children": [\n        { "name": "bin" }\n      ]}\n    ]\n  }\n}\n```\n\n```tree\n{\n  "opts": {\n    "space": {\n      "pad": 20,\n      "w": 100,\n      "h": 30\n    },\n    "rect": {\n      "w": 80,\n      "h": 20\n    }\n  },\n  "data": {\n    "(root)": {\n      "opt": {},\n      "usr": {\n        "bin": {},\n        "lib@mark": {\n          "cron": {},\n          "zsh": {}\n        },\n        "local": {\n          "bin": {}\n        },\n        "sbin": {}\n      }\n    }\n     }\n}\n```\n\n# tree\n\n```tree\n{\n  "opts": {\n    "space": {\n      "pad": 20,\n      "w": 100,\n      "h": 30\n    },\n    "rect": {\n      "w": 80,\n      "h": 20\n    }\n  },\n  "data": {\n    "(root)": {\n      "opt": {},\n      "usr": {\n        "bin": {},\n        "lib@mark": {\n          "cron": {},\n          "zsh": {}\n        },\n        "local": {\n          "bin": {}\n        },\n        "sbin": {}\n      }\n    }\n  }\n}\n```\n\n',
		images: [
			dummyimg
		],
		html: ''
	};

	$scope.$watch('hiddenView', function (value) {
		if (value) return;
		refleshView();
	});

	$scope.changeViewWidth = function () {
		var i = $scope.model.vw * 10;
		var s = i + '%';
		var t = (100 - i) + '%';
		document.getElementById('text').style.minWidth = s;
		document.getElementById('ctrl').style.minWidth = t;
	};
	$scope.changed = function () {
		if ($scope.hiddenView) return;
		refleshView();
	};
	function refleshView() {
		var toc = $scope.model.toc;
		var todo = $scope.model.todo;
		var md = $scope.model.md;

		$scope.model.html = '';

		$timeout(function () {
			var markedhtml = marked(md, { toc, todo });
			markedhtml = appendimage(markedhtml);
			$scope.model.html = $sce.trustAsHtml(markedhtml);
			// $scope.model.doc = $sce.trustAsHtml(htmlPrefix + markedhtml + htmlSuffix);

			// setTimeout(function () {
			// 	LatexIT.render('code');
			// }, 100);

			setTimeout(function () {
				mermaid.init(undefined, ".lang-uml");

				document.querySelectorAll('.lang-tree').forEach(function (el) {
					try {
						const pre = el.parentElement;
						drawTree(pre, JSON.parse(el.innerText));
					} catch (err) {
						console.error(err);
					}
				});

				document.querySelectorAll('.lang-chart').forEach(function (el) {
					try {
						var pre = el.parentElement;
						chart(pre, JSON.parse(el.innerText));
					} catch (err) {
						console.error(err);
					}
					// var o = JSON.parse(el.innerText);
					// var canvas = document.createElement('canvas');
					// var pre = el.parentNode;
					// var rootel = el.parentNode.parentNode;
					// rootel.replaceChild(canvas, pre);
					// var ctx = canvas.getContext('2d');

					// var myChart = new Chart(ctx, o);
				});

				var flownum = 0;
				document.querySelectorAll('.lang-flow').forEach(function (el) {
					el.id = 'flow' + (flownum++);
					var txt = el.innerText;
					el.innerText = '';
					var f = flowchart.parse(txt);
					f.drawSVG(el.id, {
						"line-width": 1,
						'scale': 1.0,
						"fill": "#fff"
					});
				});

				document.querySelectorAll('code:not(.hljs)').forEach((el) => {
					var src = el.innerText;
					if (src.indexOf('tex$') === 0) {
						src = src.substring('tex$'.length);
						el.innerHTML = katex.renderToString(src, {
							displayMode: false,
							strict: false,
							throwOnError: false
						});
					}
				});
				document.querySelectorAll('.lang-math').forEach(function (el) {
					var formula = el.innerText;
					// var html = katex.renderToString(formula, {
					// 	throwOnError: false
					// });
					var box = document.createElement('div');
					// box.innerHTML = html;
					katex.render(formula, box, {
						displayMode: true,
						throwOnError: false
					});
					var pre = el.parentNode;
					var rootel = el.parentNode.parentNode;
					rootel.replaceChild(box, pre);
				});

				var nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
				nums.forEach(function (n, i) {
					document.querySelectorAll('.n' + i).forEach(function(el) {
						if (el.classList.contains('reset')) n[i] = 0;
						if (!el.classList.contains('peek')) nums[i]++;
						el.innerText = nums[i];
						el.classList.add('visible');
					});
				});

				hljs.highlightAll();

				if (phoneMode) return;

				setTimeout(function () {
					var ctx = document.querySelector('.html-container');
					var markedhtml = ctx.children[0].innerHTML;
					$scope.model.doc = $sce.trustAsHtml(htmlPrefix + markedhtml + htmlSuffix);
					console.log('generate html');
				}, 3000);
			}, 500);
		});
	}

	$scope.loaded = function (res) {
		res.sort(function (a, b) {
			return a.name < b.name ? -1 : a.name > b.name ? 1 : res.indexOf(b) - res.indexOf(a);
		}).forEach(function (d) {
			$scope.model.images.push(d);
			if ($scope.model.images.indexOf(dummyimg) > -1) {
				$scope.model.images.splice(0, 1);
			}
		});
	};

	function appendimage(html) {
		var imgs = $scope.model.images;
		var res = [];
		var lastpos = 0;
		recurse();
		res.push(html.substring(lastpos));
		return res.join('');

		function recurse() {
			var offset = 0;
			var pos = html.indexOf('<img id="', lastpos);
			if (pos >= 0) {
				offset = 9;
			} else {
				pos = html.indexOf('<img src="', lastpos);
				if (pos >= 0) {
					offset = 10;
				}
			}
			if (pos < 0) return;

			var pos2 = html.indexOf('"', pos + offset);
			if (pos2 < 0) return;

			var id = html.substring(pos + offset, pos2);
			var idpos = id.lastIndexOf('/');
			if (idpos >= 0) {
				id = id.substring(idpos + 1);
			}
			var pos3 = html.indexOf('>', pos2);
			if (pos3 < 0) return;
			var img = imgs.find(function (d) {
				return d.name === id;
			});
			console.log('img', id);
			if (!img) return;

			res.push(html.substring(lastpos, pos));
			res.push('<img src="');
			res.push(img.data);
			res.push('" ');
			res.push(html.substring(pos2 + 1, pos3 + 1));
			lastpos = pos3 + 1;
			recurse();
		}
	}

	$scope.clipimage = function (evt, img) {
		/** @type {HTMLInputElement} */
		// @ts-ignore
		var el = document.getElementById('clippedimg');
		el.value = '<img id="' + img.name + '">';
		el.select();
		document.execCommand('copy');
		evt.target.focus();
	};

	$scope.dropimage = function (evt, img) {
		var imgs = $scope.model.images;
		imgs.splice(imgs.indexOf(img), 1);
		if (!imgs.length) {
			imgs.push(dummyimg);
		}
		$scope.changed();
	}

	$scope.image = function (svg) {
		// https://developer.mozilla.org/ja/docs/Web/HTML/Canvas/Drawing_DOM_objects_into_a_canvas
		if (!svg) {
			var svgs = document.getElementsByTagName('svg');
			if (svgs && svgs.length > 0) svg = svgs[0];
		}
		if (!svg) return;
		var svgData = new XMLSerializer().serializeToString(svg);
		var canvas = document.createElement('canvas');
		canvas.width = svg.getBoundingClientRect().width;
		canvas.height = svg.getBoundingClientRect().height;
		var ctx = canvas.getContext('2d');
		var DOMURL = self.URL || self.webkitURL || self;
		var img = new Image();
		var blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
		var url = DOMURL.createObjectURL(blob);
		img.onload = function () {
			ctx.drawImage(img, 0, 0);
			var png = canvas.toDataURL("image/png");
			// document.querySelector('#png-container').innerHTML = '<img src="' + png + '"/>';
			// DOMURL.revokeObjectURL(png);
			window.open(png);
		};
		img.src = url;
	};

	/*
	$scope.image = function (svg) {
		if (!svg) {
			var svgs = document.getElementsByTagName('svg');
			if (svgs && svgs.length > 0) svg = svgs[0];
		}
		if (!svg) return;
		var svgData = new XMLSerializer().serializeToString(svg);

		var base64 = btoa(unescape(encodeURIComponent(svgData)));
		var imgsrc = "data:image/svg+xml;charset=utf-8;base64," + base64; //svgデータをbase64に変換
		window.open(imgsrc);
	};
	*/

	$scope.changed();
}]);
ngapp.directive('dropFile', ['$timeout', function ($timeout) {
	return {
		restrict: 'A',
		scope: {
			dropFile: '<'
		},
		/**
			* @param {*} scope
			* @param {angular.IRootElementService} elm
			* @param {angular.IAttributes} attrs
			*/
		link: function DropFilesDirectiveLink(scope, elm, attrs) {
			elm.on('dragover', function (evt) {
				evt.preventDefault();
			});

			elm.on('drop', function (evt) {
				evt.preventDefault();
				console.log(evt);

				if (evt['dataTransfer']) {
					parseFiles(evt['dataTransfer'].files, function (res) {
						sendResult(res);
					});
				} else {
					sendResult();
				}
			});

			function sendResult(res) {
				if (scope.dropFile && typeof scope.dropFile === 'function') {
					$timeout(function () {
						scope.dropFile(res);
					});
				} else {
					scope.$emit('dropFiles.done', {
						target: scope.dropFiles,
						data: res
					});
				}
			}

			/**
			* @param {any} files
			* @param {any} callback
			* @returns
			*/
			function parseFiles(files, callback) {
				var res = [];

				if (!files || files.length === 0) {
					if (callback) callback(res);
					return;
				}

				for (var i = 0; i < files.length; i++) {
					var f = files[i];
					var reader = new FileReader();
					// Closure to capture the file information.
					reader.onload = (function (file) {
						return function (e) {
							res.push({
								name: file.name,
								type: file.type,
								size: Math.round(file.size * 100 / 1024) / 100, //KB
								lastModifiedDate: file.lastModifiedDate,
								data: e.target.result
							});
							if (callback && res.length >= files.length) callback(res);
							file = null;
						};
					})(f);

					reader.onerror = (function (file) {
						return function (e) {
							res.push({
								name: file.name,
								type: 'error',
								size: 0,
								lastModifiedData: file.lastModifiedDate,
								data: ''
							});
							if (callback && res.length <= files.length) callback(res);
						};
					})(f);

					// Read in the image file as a data URL.
					reader.readAsDataURL(f);
				}
			}

			function b64DecodeUnicode(str) {
				return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
					return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
				}).join(''));
			}
		}
	};
}]);

/**
 * 
 * @param {HTMLElement} el 
 * @param {*} opts 
 */
 function chart(el, opts) {
	opts = opts || {};
	opts.type = opts.type || 'line';
	opts.fields = opts.fields || {};
	opts.domains = opts.domains || [];
	const key = opts.fields.x = opts.fields.x || 'id';
	const value = opts.fields.y = opts.fields.y || 'value';
	opts.width = opts.width || 300;
	opts.height = opts.height || 300;
	opts.margin = opts.margin || {};
	opts.margin.left = opts.margin.left || 10;
	opts.margin.right = opts.margin.right || 10;
	opts.margin.top = opts.margin.top || 10;
	opts.margin.bottom = opts.margin.bottom || 10;
	opts.scale = opts.scale || {};
	opts.scale.x = opts.scale.x = opts.type === 'bar' ? 'band' : 'linear';
	opts.scale.y = opts.scale.y || {};
	const data = opts.data || [];

	el.childNodes.forEach((c) => {
		c.remove();
	});

	const defcolors = d3.schemeSpectral[(opts.domains.length < 3) ? 3 : opts.domains.length];
	if (opts.type === 'donut') {
		const chart = DonutChart(data, {
			name: function (d) { return d.id; },
			value: function (d) { return d.value || 0; },
			colors: data.map(function (d, i) { return d.color || defcolors[i]; }),
			width: opts.width,
			height: opts.height
		});
		d3.select(el).node().appendChild(chart);
		return;
	} else if (opts.type === 'stacked-bar') {
		const chart = StackedBarChart(data, {
			x: function (d) { return d.id; },
			y: function (d) { return d.value || 0; },
			z: function (d) { return d.domain; },
			// xDomain: d3.groupSort(data, D => d3.sum(D, d => -d.value), d => d.id),
			yLabel: opts.scale.y.label || '',
			zDomain: opts.domains.map(function (d) { return (typeof d === 'object') ? d.name : '' + d; }),
			colors: opts.domains.map(function (d, i) { return d.color || defcolors[i]; }),
			width: opts.width,
			height: opts.height
		});
		d3.select(el).node().appendChild(chart);
		return;
	} else if (opts.type === 'stacked-area') {
		// https://observablehq.com/@d3/stacked-area-chart?collection=@d3/charts
		const chart = StackedAreaChart(data, {
			x: function (d) { return d.id; },
			y: function (d) { return d.value || 0; },
			z: function (d) { return d.domain; },
			yLabel: opts.scale.y.label || '',
			colors: opts.domains.map(function (d, i) { return d.color || defcolors[i]; }),
			width: opts.width,
			height: opts.height
		});
		d3.select(el).node().appendChild(chart);
		return;
	} else if (opts.type === 'slope') {
		const chart = SlopeChart(data, {
			x: function (d) { return d.id; },
			y: function (d) { return d.value || 0; },
			z: function (d) { return d.domain; },
			stroke: function (d, i) { return opts.domains[i].color || defcolors[i]; },
			width: opts.width,
			height: opts.height
		});
		d3.select(el).node().appendChild(chart);
		return;
	} else if (opts.type === 'tree') {
		const chart = TreeChart(data, {
			label: d => d.name,
			title: (d, n) => `${n.ancestors().reverse().map(d => d.data.name).join(".")}`, // hover text
			link: (d, n) => null, // `https://github.com/prefuse/Flare/${n.children ? "tree" : "blob"}/master/flare/src/${n.ancestors().reverse().map(d => d.data.name).join("/")}${n.children ? "" : ".as"}`,
			width: opts.width
		  
		});
		d3.select(el).node().appendChild(chart);
		return;
	}

	const x = d3[opts.scale.x === 'band' ? 'scaleBand' : opts.scale.x === 'time' ? 'scaleTime' : 'scaleLinear']([0, opts.width]);
	const y = d3.scaleLinear([opts.height, 0]);

	const svg = d3.select(el).append('svg')
		.attr('width', opts.width + opts.margin.left + opts.margin.right)
		.attr('height', opts.height + opts.margin.top + opts.margin.bottom)
		.append('g')
		.attr('transform', 'translate(' + opts.margin.left + ',' + opts.margin.top + ')');

	// Scale the range of the data in the domains
	if (opts.scale.x === 'band') {
		x.domain(opts.data.map((d) => { return d[key]; }));
	} else {
		x.domain(d3.extent(opts.data, (d) => { return d[key]; }));
	}
	y.domain([0, d3.max(data, (d) => { return d[value]; })]);

	if (opts.type === 'bar') {
		// append the rectangles for the bar chart
		svg.selectAll('.chart-bar')
			.data(data)
			.enter().append('rect')
			.attr('class', 'chart-bar')
			.attr('fill', 'steelblue')
			.attr('x', function (d) { return x(d[key]); })
			.attr('width', x.bandwidth())
			.attr('y', function (d) { return y(d[value]); })
			.attr('height', function (d) { return opts.height - y(d.value); });
	} else if (opts.type === 'area') {
		var area = d3.area()
			.x(function (d) { return x(d[key]); })
			.y1(function (d) { return y(d[value]); });
		area.y0(y(0));
		svg.append('path')
			.datum(data)
			.attr('class', 'chart-area')
			.attr('fill', 'steelblue')
			.attr('d', area);
	} else {
		// append the paths for the line chart
		var line = d3.line()
			.x(function (d) { return x(d[key]); })
			.y(function (d) { return y(d[value]); });
		var domains = data.reduce(function (p, c) {
			var d = c.domain || '';
			if (p.indexOf(d) < 0) p.push(d);
			return p;
		}, []);
		domains.forEach(function (domain, i) {
			svg.append("path")
				.datum(data.filter(function (d) {
					return domain === (d.domain || '');
				}))
				.attr('class', 'chart-line')
				.attr("fill", "none")
				.attr("stroke", d3.schemeTableau10[i % 10])
				.attr("stroke-linejoin", "round")
				.attr("stroke-linecap", "round")
				.attr("stroke-width", 1.5)
				.attr("d", line);
		});
	}

	// add the x Axis
	svg.append('g')
		.attr('transform', "translate(0," + opts.height + ")")
		.call(d3.axisBottom(x));

	// add the y Axis
	svg.append('g')
		.call(d3.axisLeft(y));
}


function drawTree(el, json) {
	json = json || {};
	let data = json.data || [];
	let opts = json.opts || {};
	opts.rect = opts.rect || {
		w: 80,
		h: 20
	};
	opts.space = opts.space || {
		pad: 20,
		w: 100,
		h: 30
	};
	/* opts
	{
		raw: true,
		w: 0,
		h: 0,
		rect: {
			w: 80,
			h: 20
		},
		space: {
			pad: 20,
			w: 100,
			h: 30
		}
	}*/

	/* data
	{
		"(root)": {
			"opt": {},
			"usr": {
				"bin": {},
				"lib@mark": {
					"cron": {},
					"zsh": {}
				},
				"local": {
					"bin": {}
				},
				"sbin": {}
			}
		}
	};*/

	/*
	var data = {
		name: "(root)",
		children: [
			{
				name: "opt"
			},
			{
				name: "usr",
				children: [
					{
						name: "bin"
					},
					{
						name: "lib",
						class: "mark",
						children: [
							{ name: "cron" }, { name: "zsh" }
						]
					},
					{
						name: "local",
						children: [
							{ name: "bin" }
						]
					},
					{
						name: "sbin"
					},
				],
			}
		]
	};*/

	const svg = d3.select(el.parentNode).append('svg');
	// .append('g')
	// .attr('transform', 'translate(' + opts.margin.left + ',' + opts.margin.top + ')');
	el.parentNode.replaceChild(svg.node(), el);

	if (!opts.raw) data = convertRawData(data)[0];

	var root = d3.hierarchy(data);
	var tree = d3.tree();
	tree(root);
	root.count();

	var height = opts.h || (root.value * opts.rect.h +
		(root.value - 1) * (opts.space.h - opts.rect.h) +
		opts.space.pad * 2);
	var width = opts.w || ((root.height + 1) * opts.rect.w +
		root.height * (opts.space.w - opts.rect.w) +
		opts.space.pad * 2);

	svg.attr('width', width).attr('height', height);

	function convertRawData(raw) {
		if (!raw) return;

		return Object.keys(raw).map(function (k) {
			var token = k.split('@');
			var o = {
				name: token[0],
				class: token[1]
			};
			var children = convertRawData(raw[k]);
			if (children && children.length) o.children = children;
			return o;
		});
	}

	function seekParent(d, name) {
		var siblings = d.parent.children;
		var target = siblings.find(function (d) {
			return d.data.name == name;
		});
		return target ? { name: name, hierarchy: siblings } : seekParent(d.parent, name);
	}

	function calcLeaves(names, d) {
		var eachHierarchies = names.map(function (name) {
			return seekParent(d, name)
		});
		var eachIdxes = eachHierarchies.map(function (item) {
			return item.hierarchy.findIndex(function (contents) {
				return contents.data.name == item.name;
			});
		});
		var filteredHierarchies = eachHierarchies.map(function (item, idx) {
			return item.hierarchy.slice(0, eachIdxes[idx]);
		});
		var values = filteredHierarchies.map(function (hierarchy) {
			return hierarchy.map(function (item) {
				return item.value;
			});
		});
		return values.flat();
	}

	function defineY(data, spc) {
		const ancestorValues = data.ancestors().map(function (item) {
			return item.data.name;
		});
		const leaves = calcLeaves(ancestorValues.slice(0, ancestorValues.length - 1), data);
		const sumLeaves = leaves.reduce(function (previous, current) {
			return previous + current;
		}, 0);
		return sumLeaves * spc.h + spc.pad;
	}

	function definePos(treeData, spc) {
		treeData.each(function (d) {
			d.x = d.depth * spc.w + spc.pad;
			d.y = defineY(d, spc);
		});
	}

	definePos(root, opts.space);

	var g = svg.append('g');

	g.selectAll('.d3tree-link')
		.data(root.descendants().slice(1))
		.enter()
		.append('path')
		.attr('class', 'd3tree-link')
		.attr('d', function (d) {
			var p = 'M' + d.x + ',' + d.y + 'L' + (d.parent.x + opts.rect.w + (opts.space.w - opts.rect.w) / 2) + ',' + (d.y) + ' ' + (d.parent.x + opts.rect.w + (opts.space.w - opts.rect.w) / 2) + ',' + (d.parent.y) + ' ' + (d.parent.x + opts.rect.w) + ',' + d.parent.y;
			return p;
			//	.replace(/\r?\n/g, '')
			//	.replace(/\s+/g, ' ');
		})
		.attr('transform', function (d) {
			return 'translate(0, ' + (opts.rect.h / 2) + ')';
		});

	g.selectAll('.d3tree-node')
		.data(root.descendants())
		.enter()
		.append('g')
		.attr('class', function (d) {
			return (d.data.class ? d.data.class + ' ' : '') + 'd3tree-node';
		})
		.attr('transform', function (d) {
			return 'translate(' + d.x + ', ' + d.y + ')';
		})
		.call(function (me) {
			me.append('rect')
				.attr('width', opts.rect.w)
				.attr('height', opts.rect.h);
		})
		.call(function (me) {
			me.append('text')
				.text(function (d) {
					return d.data.name;
				})
				.attr('transform', 'translate(5, 15)');
		});
}

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/stacked-bar-chart
function StackedBarChart(data, {
	x = (d, i) => i, // given d in data, returns the (ordinal) x-value
	y = d => d, // given d in data, returns the (quantitative) y-value
	z = () => 1, // given d in data, returns the (categorical) z-value
	title, // given d in data, returns the title text
	marginTop = 30, // top margin, in pixels
	marginRight = 0, // right margin, in pixels
	marginBottom = 30, // bottom margin, in pixels
	marginLeft = 40, // left margin, in pixels
	width = 640, // outer width, in pixels
	height = 400, // outer height, in pixels
	xDomain, // array of x-values
	xRange = [marginLeft, width - marginRight], // [left, right]
	xPadding = 0.1, // amount of x-range to reserve to separate bars
	yType = d3.scaleLinear, // type of y-scale
	yDomain, // [ymin, ymax]
	yRange = [height - marginBottom, marginTop], // [bottom, top]
	zDomain, // array of z-values
	offset = d3.stackOffsetDiverging, // stack offset method
	order = d3.stackOrderNone, // stack order method
	yFormat, // a format specifier string for the y-axis
	yLabel, // a label for the y-axis
	colors = d3.schemeTableau10, // array of colors
} = {}) {
	// Compute values.
	const X = d3.map(data, x);
	const Y = d3.map(data, y);
	const Z = d3.map(data, z);

	// Compute default x- and z-domains, and unique them.
	if (xDomain === undefined) xDomain = X;
	if (zDomain === undefined) zDomain = Z;
	xDomain = new d3.InternSet(xDomain);
	zDomain = new d3.InternSet(zDomain);

	// Omit any data not present in the x- and z-domains.
	const I = d3.range(X.length).filter(i => xDomain.has(X[i]) && zDomain.has(Z[i]));

	// Compute a nested array of series where each series is [[y1, y2], [y1, y2],
	// [y1, y2], …] representing the y-extent of each stacked rect. In addition,
	// each tuple has an i (index) property so that we can refer back to the
	// original data point (data[i]). This code assumes that there is only one
	// data point for a given unique x- and z-value.
	const series = d3.stack()
		.keys(zDomain)
		.value(([x, I], z) => Y[I.get(z)])
		.order(order)
		.offset(offset)
		(d3.rollup(I, ([i]) => i, i => X[i], i => Z[i]))
		.map(s => s.map(d => Object.assign(d, { i: d.data[1].get(s.key) })));

	// Compute the default y-domain. Note: diverging stacks can be negative.
	if (yDomain === undefined) yDomain = d3.extent(series.flat(2));

	// Construct scales, axes, and formats.
	const xScale = d3.scaleBand(xDomain, xRange).paddingInner(xPadding);
	const yScale = yType(yDomain, yRange);
	const color = d3.scaleOrdinal(zDomain, colors);
	const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
	const yAxis = d3.axisLeft(yScale).ticks(height / 60, yFormat);

	// Compute titles.
	if (title === undefined) {
		const formatValue = yScale.tickFormat(100, yFormat);
		title = i => `${X[i]}\n${Z[i]}\n${formatValue(Y[i])}`;
	} else {
		const O = d3.map(data, d => d);
		const T = title;
		title = i => T(O[i], i, data);
	}

	const svg = d3.create("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("viewBox", [0, 0, width, height])
		.attr("style", "max-width: 100%; height: auto; height: intrinsic;");

	svg.append("g")
		.attr("transform", `translate(${marginLeft},0)`)
		.call(yAxis)
		.call(g => g.select(".domain").remove())
		.call(g => g.selectAll(".tick line").clone()
			.attr("x2", width - marginLeft - marginRight)
			.attr("stroke-opacity", 0.1))
		.call(g => g.append("text")
			.attr("x", -marginLeft)
			.attr("y", 10)
			.attr("fill", "currentColor")
			.attr("text-anchor", "start")
			.text(yLabel));

	const bar = svg.append("g")
		.selectAll("g")
		.data(series)
		.join("g")
		.attr("fill", ([{ i }]) => color(Z[i]))
		.selectAll("rect")
		.data(d => d)
		.join("rect")
		.attr("x", ({ i }) => xScale(X[i]))
		.attr("y", ([y1, y2]) => Math.min(yScale(y1), yScale(y2)))
		.attr("height", ([y1, y2]) => Math.abs(yScale(y1) - yScale(y2)))
		.attr("width", xScale.bandwidth());

	if (title) bar.append("title")
		.text(({ i }) => title(i));

	svg.append("g")
		.attr("transform", `translate(0,${yScale(0)})`)
		.call(xAxis);

	return Object.assign(svg.node(), { scales: { color } });
}

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/stacked-area-chart
function StackedAreaChart(data, {
	x = ([x]) => { return x; }, // given d in data, returns the (ordinal) x-value
	y = ([, y]) => { return y; }, // given d in data, returns the (quantitative) y-value
	z = () => 1, // given d in data, returns the (categorical) z-value
	marginTop = 20, // top margin, in pixels
	marginRight = 30, // right margin, in pixels
	marginBottom = 30, // bottom margin, in pixels
	marginLeft = 40, // left margin, in pixels
	width = 640, // outer width, in pixels
	height = 400, // outer height, in pixels
	xType = d3.scaleUtc, // type of x-scale
	xDomain, // [xmin, xmax]
	xRange = [marginLeft, width - marginRight], // [left, right]
	yType = d3.scaleLinear, // type of y-scale
	yDomain, // [ymin, ymax]
	yRange = [height - marginBottom, marginTop], // [bottom, top]
	zDomain, // array of z-values
	offset = d3.stackOffsetDiverging, // stack offset method
	order = d3.stackOrderNone, // stack order method
	xFormat, // a format specifier string for the x-axis
	yFormat, // a format specifier for the y-axis
	yLabel, // a label for the y-axis
	colors = d3.schemeTableau10, // array of colors for z
} = {}) {
	// Compute values.
	const X = d3.map(data, x);
	const Y = d3.map(data, y);
	const Z = d3.map(data, z);

	// Compute default x- and z-domains, and unique the z-domain.
	if (xDomain === undefined) xDomain = d3.extent(X);
	if (zDomain === undefined) zDomain = Z;
	zDomain = new d3.InternSet(zDomain);

	// Omit any data not present in the z-domain.
	const I = d3.range(X.length).filter(i => zDomain.has(Z[i]));

	// Compute a nested array of series where each series is [[y1, y2], [y1, y2],
	// [y1, y2], …] representing the y-extent of each stacked rect. In addition,
	// each tuple has an i (index) property so that we can refer back to the
	// original data point (data[i]). This code assumes that there is only one
	// data point for a given unique x- and z-value.
	const series = d3.stack()
		.keys(zDomain)
		.value(([x, I], z) => Y[I.get(z)])
		.order(order)
		.offset(offset)
		(d3.rollup(I, ([i]) => i, i => X[i], i => Z[i]))
		.map(s => s.map(d => Object.assign(d, { i: d.data[1].get(s.key) })));

	// Compute the default y-domain. Note: diverging stacks can be negative.
	if (yDomain === undefined) yDomain = d3.extent(series.flat(2));

	// Construct scales and axes.
	const xScale = xType(xDomain, xRange);
	const yScale = yType(yDomain, yRange);
	const color = d3.scaleOrdinal(zDomain, colors);
	const xAxis = d3.axisBottom(xScale).ticks(width / 80, xFormat).tickSizeOuter(0);
	const yAxis = d3.axisLeft(yScale).ticks(height / 50, yFormat);

	const area = d3.area()
		.x(({ i }) => xScale(X[i]))
		.y0(([y1]) => yScale(y1))
		.y1(([, y2]) => yScale(y2));

	const svg = d3.create("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("viewBox", [0, 0, width, height])
		.attr("style", "max-width: 100%; height: auto; height: intrinsic;");

	svg.append("g")
		.attr("transform", `translate(${marginLeft},0)`)
		.call(yAxis)
		.call(g => g.select(".domain").remove())
		.call(g => g.selectAll(".tick line").clone()
			.attr("x2", width - marginLeft - marginRight)
			.attr("stroke-opacity", 0.1))
		.call(g => g.append("text")
			.attr("x", -marginLeft)
			.attr("y", 10)
			.attr("fill", "currentColor")
			.attr("text-anchor", "start")
			.text(yLabel));

	svg.append("g")
		.selectAll("path")
		.data(series)
		.join("path")
		.attr("fill", ([{ i }]) => color(Z[i]))
		.attr("d", area)
		.append("title")
		.text(([{ i }]) => Z[i]);

	svg.append("g")
		.attr("transform", `translate(0,${height - marginBottom})`)
		.call(xAxis);

	return Object.assign(svg.node(), { scales: { color } });
}

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/slope-chart
function SlopeChart(data, {
	x = ([x]) => x, // given d in data, returns a (ordinal) column name
	y = ([, y]) => y, // given d in data, returns a (quantitative) value
	z = () => 1, // given d in data, returns a (categorical) series name
	defined, // for gaps in data
	curve = d3.curveLinear, // method of interpolation between points; try d3.curveBumpX
	marginTop = 20, // top margin, in pixels
	marginRight = 30, // right margin, in pixels
	marginBottom = 20, // bottom margin, in pixels
	marginLeft = 30, // left margin, in pixels
	inset, // additional margins
	insetTop = inset === undefined ? 20 : inset, // separation between y-axis and top line
	insetBottom = inset === undefined ? 0 : inset, // additional bottom margin
	labelPadding = 3, // padding from the start or end of the line to label, in pixels
	labelSeparation = 10, // separation in pixels for avoiding label collisions 
	width = 640, // outer width, in pixels
	height = 400, // outer height, in pixels
	xDomain, // array of x-values
	xRange = [marginLeft, width - marginRight], // [left, right]
	xPadding = 0.5, // padding for the x-scale (for first and last column)
	yType = d3.scaleLinear, // type of y-scale
	yDomain, // [ymin, ymax]
	yRange = [height - marginBottom - insetBottom, marginTop + insetTop], // [bottom, top]
	yFormat, // a format for the value in the label
	zDomain, // array of z-values
	color = "currentColor", // alias for stroke
	stroke = color, // stroke color of line
	strokeLinecap, // stroke line cap of line
	strokeLinejoin, // stroke line join of line
	strokeWidth, // stroke width of line
	strokeOpacity, // stroke opacity of line
	mixBlendMode, // blend mode of lines
	halo = "#fff", // color of label halo 
	haloWidth = 4, // padding around the labels
} = {}) {
	// Compute values.
	const X = d3.map(data, x);
	const Y = d3.map(data, y);
	const Z = d3.map(data, z);
	if (defined === undefined) defined = (d, i) => !isNaN(Y[i]);
	const D = d3.map(data, defined);

	// Compute default domains, and unique the x- and z-domains.
	if (xDomain === undefined) xDomain = X;
	if (yDomain === undefined) yDomain = d3.extent(Y);
	if (zDomain === undefined) zDomain = Z;
	xDomain = new d3.InternSet(xDomain);
	zDomain = new d3.InternSet(zDomain);

	// Omit any data not present in the x- and z-domain.
	const I = d3.range(X.length).filter(i => xDomain.has(X[i]) && zDomain.has(Z[i]));

	// Construct scales, axes, and formats.
	const xScale = d3.scalePoint(xDomain, xRange).padding(xPadding);
	const yScale = yType(yDomain, yRange);
	const xAxis = d3.axisTop(xScale).tickSizeOuter(0);
	yFormat = yScale.tickFormat(100, yFormat);

	// Construct a line generator.
	const line = d3.line()
		.defined(i => D[i])
		.curve(curve)
		.x(i => xScale(X[i]))
		.y(i => yScale(Y[i]));

	const svg = d3.create("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("viewBox", [0, 0, width, height])
		.attr("style", "max-width: 100%; height: auto; height: intrinsic;")
		.attr("font-family", "sans-serif")
		.attr("font-size", 10);

	svg.append("g")
		.attr("transform", `translate(0,${marginTop})`)
		.call(xAxis)
		.call(g => g.select(".domain").remove());

	svg.append("g")
		.attr("fill", "none")
		//.attr("stroke", stroke)
		.attr("stroke-linecap", strokeLinecap)
		.attr("stroke-linejoin", strokeLinejoin)
		.attr("stroke-width", strokeWidth)
		.attr("stroke-opacity", strokeOpacity)
		.selectAll("path")
		.data(d3.group(I, i => Z[i]))
		.join("path")
		.style("mix-blend-mode", mixBlendMode)
		.attr("stroke", stroke)
		.attr("d", ([, I]) => line(I));

	const Ix = d3.group(I, i => X[i]);

	// Iterates over each column, applying the dodge heuristic on inline labels.
	for (const [i, x] of [...xDomain].entries()) {
		const text = svg.append("g")
			.attr("text-anchor", i === 0 ? "end"
				: i === xDomain.size - 1 ? "start"
					: "middle")
			.selectAll("text")
			.data(Ix.get(x))
			.join("text")
			.attr("x", xScale(x))
			.call(dodgeAttr, "y", i => yScale(Y[i]), labelSeparation)
			.attr("dy", "0.35em")
			.attr("dx", i === 0 ? -1
				: i === xDomain.size - 1 ? 1
					: 0 * labelPadding)
			.text(i === 0 ? i => `${Z[i]} ${yFormat(Y[i])}`
				: i === xDomain.size - 1 ? i => `${yFormat(Y[i])} ${Z[i]}`
					: i => yFormat(Y[i]))
			.call(text => text.clone(true))
			.attr("fill", "none")
			.attr("stroke", halo)
			.attr("stroke-width", haloWidth);
	}

	// Sets the specified named attribution on the given selection to the given values,
	// after applying the dodge heuristic to those values to ensure separation. Note
	// that this assumes the selection is not nested (only a single group).
	function dodgeAttr(selection, name, value, separation) {
		const V = dodge(selection.data().map(value), separation);
		selection.attr(name, (_, i) => V[i]);
	}

	// Given an array of positions V, offsets positions to ensure the given separation.
	function dodge(V, separation, maxiter = 10, maxerror = 1e-1) {
		const n = V.length;
		if (!V.every(isFinite)) throw new Error("invalid position");
		if (!(n > 1)) return V;
		let I = d3.range(V.length);
		for (let iter = 0; iter < maxiter; ++iter) {
			I.sort((i, j) => d3.ascending(V[i], V[j]));
			let error = 0;
			for (let i = 1; i < n; ++i) {
				let delta = V[I[i]] - V[I[i - 1]];
				if (delta < separation) {
					delta = (separation - delta) / 2;
					error = Math.max(error, delta);
					V[I[i - 1]] -= delta;
					V[I[i]] += delta;
				}
			}
			if (error < maxerror) break;
		}
		return V;
	}

	return svg.node();
}

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/donut-chart
function DonutChart(data, {
	name = ([x]) => x,  // given d in data, returns the (ordinal) label
	value = ([, y]) => y, // given d in data, returns the (quantitative) value
	title, // given d in data, returns the title text
	width = 640, // outer width, in pixels
	height = 400, // outer height, in pixels
	innerRadius = Math.min(width, height) / 3, // inner radius of pie, in pixels (non-zero for donut)
	outerRadius = Math.min(width, height) / 2, // outer radius of pie, in pixels
	labelRadius = (innerRadius + outerRadius) / 2, // center radius of labels
	format = ",", // a format specifier for values (in the label)
	names, // array of names (the domain of the color scale)
	colors, // array of colors for names
	stroke = innerRadius > 0 ? "none" : "white", // stroke separating widths
	strokeWidth = 1, // width of stroke separating wedges
	strokeLinejoin = "round", // line join of stroke separating wedges
	padAngle = stroke === "none" ? 1 / outerRadius : 0, // angular separation between wedges
} = {}) {
	// Compute values.
	const N = d3.map(data, name);
	const V = d3.map(data, value);
	const I = d3.range(N.length).filter(i => !isNaN(V[i]));

	// Unique the names.
	if (names === undefined) names = N;
	names = new d3.InternSet(names);

	// Chose a default color scheme based on cardinality.
	if (colors === undefined) colors = d3.schemeSpectral[names.size];
	if (colors === undefined) colors = d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), names.size);

	// Construct scales.
	const color = d3.scaleOrdinal(names, colors);

	// Compute titles.
	if (title === undefined) {
		const formatValue = d3.format(format);
		title = i => `${N[i]}\n${formatValue(V[i])}`;
	} else {
		const O = d3.map(data, d => d);
		const T = title;
		title = i => T(O[i], i, data);
	}

	// Construct arcs.
	const arcs = d3.pie().padAngle(padAngle).sort(null).value(i => V[i])(I);
	const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
	const arcLabel = d3.arc().innerRadius(labelRadius).outerRadius(labelRadius);

	const svg = d3.create("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("viewBox", [-width / 2, -height / 2, width, height])
		.attr("style", "max-width: 100%; height: auto; height: intrinsic;");

	svg.append("g")
		.attr("stroke", stroke)
		.attr("stroke-width", strokeWidth)
		.attr("stroke-linejoin", strokeLinejoin)
		.selectAll("path")
		.data(arcs)
		.join("path")
		.attr("fill", d => color(N[d.data]))
		.attr("d", arc)
		.append("title")
		.text(d => title(d.data));

	svg.append("g")
		.attr("font-family", "sans-serif")
		.attr("font-size", 10)
		.attr("text-anchor", "middle")
		.selectAll("text")
		.data(arcs)
		.join("text")
		.attr("transform", d => `translate(${arcLabel.centroid(d)})`)
		.selectAll("tspan")
		.data(d => {
			const lines = `${title(d.data)}`.split(/\n/);
			return (d.endAngle - d.startAngle) > 0.25 ? lines : lines.slice(0, 1);
		})
		.join("tspan")
		.attr("x", 0)
		.attr("y", (_, i) => `${i * 1.1}em`)
		.attr("font-weight", (_, i) => i ? null : "bold")
		.text(d => d);

	return Object.assign(svg.node(), { scales: { color } });
}

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/tree
function TreeChart(data, { // data is either tabular (array of objects) or hierarchy (nested objects)
	path, // as an alternative to id and parentId, returns an array identifier, imputing internal nodes
	id = Array.isArray(data) ? d => d.id : null, // if tabular data, given a d in data, returns a unique identifier (string)
	parentId = Array.isArray(data) ? d => d.parentId : null, // if tabular data, given a node d, returns its parent’s identifier
	children, // if hierarchical data, given a d in data, returns its children
	tree = d3.tree, // layout algorithm (typically d3.tree or d3.cluster)
	sort, // how to sort nodes prior to layout (e.g., (a, b) => d3.descending(a.height, b.height))
	label, // given a node d, returns the display name
	title, // given a node d, returns its hover text
	link, // given a node d, its link (if any)
	linkTarget = "_blank", // the target attribute for links (if any)
	width = 640, // outer width, in pixels
	height, // outer height, in pixels
	r = 3, // radius of nodes
	padding = 1, // horizontal padding for first and last column
	fill = "#999", // fill for nodes
	fillOpacity, // fill opacity for nodes
	stroke = "#555", // stroke for links
	strokeWidth = 1.5, // stroke width for links
	strokeOpacity = 0.4, // stroke opacity for links
	strokeLinejoin, // stroke line join for links
	strokeLinecap, // stroke line cap for links
	halo = "#fff", // color of label halo 
	haloWidth = 3, // padding around the labels
} = {}) {

	// If id and parentId options are specified, or the path option, use d3.stratify
	// to convert tabular data to a hierarchy; otherwise we assume that the data is
	// specified as an object {children} with nested objects (a.k.a. the “flare.json”
	// format), and use d3.hierarchy.
	const root = path != null ? d3.stratify().path(path)(data)
		: id != null || parentId != null ? d3.stratify().id(id).parentId(parentId)(data)
			: d3.hierarchy(data, children);

	// Sort the nodes.
	if (sort != null) root.sort(sort);

	// Compute labels and titles.
	const descendants = root.descendants();
	const L = label == null ? null : descendants.map(d => label(d.data, d));

	// Compute the layout.
	const dx = 10;
	const dy = width / (root.height + padding);
	tree().nodeSize([dx, dy])(root);

	// Center the tree.
	let x0 = Infinity;
	let x1 = -x0;
	root.each(d => {
		if (d.x > x1) x1 = d.x;
		if (d.x < x0) x0 = d.x;
	});

	// Compute the default height.
	if (height === undefined) height = x1 - x0 + dx * 2;

	const svg = d3.create("svg")
		.attr("viewBox", [-dy * padding / 2, x0 - dx, width, height])
		.attr("width", width)
		.attr("height", height)
		.attr("style", "max-width: 100%; height: auto; height: intrinsic;")
		.attr("font-family", "sans-serif")
		.attr("font-size", 10);

	svg.append("g")
		.attr("fill", "none")
		.attr("stroke", stroke)
		.attr("stroke-opacity", strokeOpacity)
		.attr("stroke-linecap", strokeLinecap)
		.attr("stroke-linejoin", strokeLinejoin)
		.attr("stroke-width", strokeWidth)
		.selectAll("path")
		.data(root.links())
		.join("path")
		.attr("d", d3.linkHorizontal()
			.x(d => d.y)
			.y(d => d.x));

	const node = svg.append("g")
		.selectAll("a")
		.data(root.descendants())
		.join("a")
		.attr("xlink:href", link == null ? null : d => link(d.data, d))
		.attr("target", link == null ? null : linkTarget)
		.attr("transform", d => `translate(${d.y},${d.x})`);

	node.append("circle")
		.attr("fill", d => d.children ? stroke : fill)
		.attr("r", r);

	if (title != null) node.append("title")
		.text(d => title(d.data, d));

	if (L) node.append("text")
		.attr("dy", "0.32em")
		.attr("x", d => d.children ? -6 : 6)
		.attr("text-anchor", d => d.children ? "end" : "start")
		.attr("paint-order", "stroke")
		.attr("stroke", halo)
		.attr("stroke-width", haloWidth)
		.text((d, i) => L[i]);

	return svg.node();
}

var htmlPrefix = '<!DOCTYPE html>\n<html lang="ja">\n<head>\n<meta charset="UTF-8">\n<title></title>\n<style>\n.info + blockquote, .info + p + blockquote { border-color: blue; }\n.warn + blockquote, .warn + p + blockquote { border-color: orange; }\n.error + blockquote, .error + p + blockquote { border-color: red; }\n\n.path {\n	font-family:sans-serif;\n	padding-left: 5px;\n	margin-bottom:-5px;\n}\n\nbody {\n	font-size: 16px;\n	line-height: 1.5;\n}\n\nbody, a, td {\n	font-family: "UD デジタル 教科書体 N-R", "游教科書体 横用", "游教科書体", "serif";\n}\nh1, h2, h3, h4, th, dt, button {\n	font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", "Roboto", "Segoe UI", "BIZ UDゴシック", "游ゴシック体", sans-serif;\n	font-weight: 400;\n}\ncode, textarea {\n	font-family: "Ricty Diminished", Ricty, Consolas, "Courier New", Courier, Monaco, monospace;\n}\nbody, div, span, li, p, td, pre, code, blockquote {\n}\ndiv.reset, .reset span, .reset li, .reset p, .reset td, .reset pre, .reset code {\n	font-size: initial;\n	line-height: revert;\n	font-family: initial;\n	font-weight: initial;\n}\n\np::first-letter {\n	padding-left: 1em;\n}\nli p::first-letter {\n	padding-left: 0;\n}\n\n.reset h1, .reset h2, .reset h3, .reset h4, .reset th, .reset dt, .reset button {\n	font-family: initial;\n	font-weight: initial;\n}\n\nh1, h2, h3, h4 {\n	margin: 1em 0 .5em 0;\n	padding: 0;\n}\n.reset h1, .reset h2, .reset h3, .reset h4 {\n	margin: revert;\n	padding: revert;\n}\n\nh1:first-child {\n	margin-top: 0;\n}\n\nstrong {\n	font-weight: bold;\n	background-color: #ffc;\n}\n\n.reset code {\n	font-family: initial;\n	color: revert;\n	font-weight: initial;\n}\n\na {\n	color: #630;\n}\n.reset a {\n	font-family: initial;\n	font-weight: initial;\n	color: revert;\n}\na:hover {\n	color: #963;\n}\n\nbutton {\n	padding: 6px;\n	margin: 3px;\n	border-radius: 3px;\n	border: #999 solid 1px;\n	background-color: #ccc;\n}\n.reset button {\n	padding: revert;\n	margin: revert;\n	border-radius: revert;\n	border: revert;\n	background-color: revert;\n}\n\ntextarea {\n	padding: 6px;\n	margin: 3px;\n	border-radius: 3px;\n	border: #999 solid 1px;\n	background-color: #fff;\n}\n.reset textarea {\n	padding: revert;\n	margin: revert;\n	border-radius: revert;\n	border: revert;\n	background-color: revert;\n}\n\n.main {\n	margin: 0px;\n	padding: 0px;\n	display: -webkit-flex;\n	display: flex;\n	-webkit-flex-flow: row;\n	flex-flow: row;\n	position: absolute;\n	top: 0;\n	left: 0;\n	right: 0;\n	bottom: 0;\n}\n\n.pane {\n	display: -webkit-box;\n	display: -webkit-flex;\n	display: -moz-box;\n	display: -moz-flex;\n	display: -ms-flexbox;\n	display: flex;\n	-webkit-box-flex: 1;\n	-webkit-flex: 1 1 200px;\n	-moz-box-flex: 1;\n	-moz-flex: 1 1 200px;\n	-ms-flex: 1 1 200px;\n	flex: 1 1 200px;\n	flex-flow: column;\n	min-width: 30%;\n}\n\n.d3tree-link {\n	fill: none;\n	stroke: #666;\n}\n.d3tree-node rect {\n	fill: none;\n	stroke: #000;\n}\n.d3tree-node.mark rect {\n	fill: rgba(255, 189, 189, .5);\n	stroke: #600;\n}\n.d3tree-node text {\n	fill: #000;\n	font-family: "Ricty Diminished", Ricty, Consolas, "Courier New", Courier, Monaco, monospace;\n}\n.d3tree-node.mark text {\n	fill: #600;\n}\n\npre {\n	border-radius: 6px;\n	background-color: #699;\n	padding: 10px;\n	white-space: pre-wrap;\n}\n.reset pre {\n	border-radius: revert;\n	background-color: revert;\n	padding: revert;\n	white-space: pre-wrap;\n}\n\npre code {\n	color: #fff;\n}\n.reset pre code {\n	color: revert;\n}\n\npre.code,\npre.xml,\npre.html,\npre.terminal,\npre.bash,\npre.dir,\npre.db,\npre.sql,\npre.java,\npre.html5,\npre.css,\npre.js,\npre.javascript {\n	position: relative;\n}\npre.code code.lang-code::before,\npre.xml code.lang-xml::before,\npre.html code.lang-html::before,\npre.terminal code.lang-terminal::before,\npre.bash code.lang-bash::before,\npre.dir code.lang-dir::before,\npre.db code.lang-db::before,\npre.sql code.lang-sql::before,\npre.java code.lang-java::before,\npre.html5 code.lang-html5::before,\npre.css code.lang-css::before,\npre.js code.lang-js::before,\npre.javascript code.lang-javasceript::before {\n	position: absolute;\n	right: 10px;\n}\n@font-face {\n  font-family: "Font Awesome 5 Solid";\n  font-style: normal;\n  font-weight: 900;\n  font-display: block;\n  src: url("fa/webfonts/fa-solid-900.eot");\n  src: url("fa/webfonts/fa-solid-900.eot?#iefix") format("embedded-opentype"), url("fa/webfonts/fa-solid-900.woff2") format("woff2"), url("fa/webfonts/fa-solid-900.woff") format("woff"), url("fa/webfonts/fa-solid-900.ttf") format("truetype"), url("fa/webfonts/fa-solid-900.svg#fontawesome") format("svg"); }\npre.code code.lang-code::before,\npre.xml code.lang-xml::before,\npre.html code.lang-html::before,\npre.terminal code.lang-terminal::before,\npre.bash code.lang-bash::before,\npre.dir code.lang-dir::before,\npre.db code.lang-db::before,\npre.sql code.lang-sql::before {\n	font-family: "Font Awesome 5 Solid";\n}\n@font-face {\n  font-family: "Font Awesome 5 Brands";\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url("fa/webfonts/fa-brands-400.eot");\n  src: url("fa/webfonts/fa-brands-400.eot?#iefix") format("embedded-opentype"), url("fa/webfonts/fa-brands-400.woff2") format("woff2"), url("fa/webfonts/fa-brands-400.woff") format("woff"), url("fa/webfonts/fa-brands-400.ttf") format("truetype"), url("fa/webfonts/fa-brands-400.svg#fontawesome") format("svg"); }\npre.uml,\npre.flow {\n	background-color: transparent;\n}\npre.java code.lang-java::before,\npre.html5 code.lang-html5::before,\npre.css code.lang-css::before,\npre.js code.lang-js::before,\npre.javascript code.lang-javasceript::before {\n	font-family: "Font Awesome 5 Brands";\n}\npre.code code.lang-code::before,\npre.xml code.lang-xml::before,\npre.html code.lang-html::before {\n	content: "\f121";\n}\npre.terminal code.lang-terminal::before,\npre.bash code.lang-bash::before {\n	content: "\f120";\n}\npre.dir code.lang-dir::before {\n	content: "\f0e8";\n}\npre.db code.lang-db::before,\npre.sql code.lang-sql::before {\n	content: "\f1c0";\n}\npre.java code.lang-java::before {\n	content: "\f4e4";\n}\npre.html5 code.lang-html5::before {\n	content: "\f13b";\n}\npre.css code.lang-css::before {\n	content: "\f13c";\n}\npre.js code.lang-js::before,\npre.javascript code.lang-javasceript::before {\n	content: "\f3b8";\n}\npre.latex {\n	background-color: transparent;\n}\n\nblockquote {\n	border-left: #ddd solid 3px;\n	padding-left: 10px;\n}\n.reset blockquote {\n	border-left: revert;\n	padding-left: revert;\n}\n\ntable {\n	border: #999 solid 1px;\n}\n.reset table {\n	border: revert;\n}\n\nth,\ntd {\n	border: #ccc solid 1px;\n}\n.reset th, .reset td {\n	border: revert;\n}\n\nth {\n	background-color: #ddd;\n}\n.reset th {\n	background-color: revert;\n}\n\np {\n	margin-top: 0.5em;\n	margin-bottom: 0;\n}\n.reset p {\n	margin-top: revert;\n	margin-bottom: revert;\n}\nli p {\n	margin-top: 0;\n}\n\nh1 {\n	font-size: 2em;\n	color: #345180;\n	border-bottom: #345180 solid 2px;\n}\n.reset h1 {\n	font-size: revert;\n	color: revert;\n	border-bottom: revert;\n}\n\nh2 {\n	font-size: 1.8em;\n	color: #5D7291;\n}\n.reset h2 {\n	font-size: revert;\n	color: revert;\n}\n\nh3 {\n	font-size: 1.5em;\n	color: #497E93;\n}\n.reset h3 {\n	font-size: revert;\n	color: revert;\n}\n\nol,\nul {\n	-webkit-margin-before: 1em;\n	-webkit-margin-after: 1em;\n	-webkit-margin-start: 0;\n	-webkit-margin-end: 0;\n	-webkit-padding-start: 2em;\n}\nli ul,\nli ol {\n	-webkit-margin-before: .5em;\n	-webkit-margin-after: .5em;\n}\n.reset ol, .reset ul {\n	-webkit-margin-before: revert;\n	-webkit-margin-after: revert;\n	-webkit-margin-start: revert;\n	-webkit-margin-end: revert;\n	-webkit-padding-start: revert;\n}\n\nli {\n	position: relative;\n}\n.reset li {\n	position: revert;\n}\n\nli > p {\n	color: #313D4D;\n}\n\nli > p:first-child {\n	color: #000;\n}\nul > li.todo {\n	list-style-type: none;\n}\n\nul > li.todo::before {\n	position: absolute;\n	left: -1em;\n	top: -0.5em;\n	font-size: 200%;\n	content: "\2610";\n}\n\nul > li.done {\n	list-style-type: none;\n}\n\nul > li.done::before {\n	position: absolute;\n	left: -1em;\n	top: -0.5em;\n	font-size: 200%;\n	content: "\2611";\n}\n\nul.toc > li {\n	list-style-type: none;\n}\n\nul.toc > li.depth1 {\n	padding-left: 0em;\n}\n\nul.toc > li.depth2 {\n	padding-left: 2em;\n}\n\nul.toc > li.depth3 {\n	padding-left: 4em;\n}\n\n#clippedimg {\n	border: 0;\n	padding: 0;\n	margin: 0;\n	width: 1px;\n	-webkit-appearance: none;\n	position: absolute;\n	right: 0;\n}\n\n#imgs {\n	border: #ccc solid 1px;\n	border-radius: 6px;\n	margin: 2px;\n	padding: 3px;\n}\n#imgs div,\n#imgs div a {\n	font-family: "Ricty Diminished", Ricty, Consolas, "Courier New", Courier, Monaco, monospace;\n}\n#imgs div a {\n	background-color: #999;\n	color: #fff;\n	cursor: pointer;\n	border-radius: 6px;\n	padding: 3px;\n	min-width: 2em;\n	display: inline-block;\n	text-align: center;\n}\n#imgs div a:hover {\n	background-color: #ccc;\n}\n\nimg {\n	max-width: 80%;\n	min-width: 12%;\n}\n.reset img {\n	max-width: revert;\n	min-width: revert;\n}\n\n.katex-mathml {\n	display: none;\n}\n\nh1 {\n	page-break-before: always;\n}\n@media screen {\n	.html-container {\n		position: relative;\n		height: 100%;\n	}\n	h1 {\n		position: sticky;\n		top: 0;\n		background-color: #fff;\n		white-space: nowrap;\n		overflow: hidden;\n		z-index: 100;\n	}\n}\n\n@media print {\n	h1 {\n		margin-top: 0;\n		page-break-before: always;\n	}\n\n	h1:first-child {\n		page-break-before: none;\n	}\n\n	.main {\n		display: block;\n		position: relative;\n	}\n\n	#ctrl {\n		display: none;\n		position: absolute;\n	}\n\n	.html-container {\n		display: block;\n		position: relative;\n	}\n}\n\n@font-face{font-family:KaTeX_AMS;font-style:normal;font-weight:400;src:url(fonts/KaTeX_AMS-Regular.woff2) format("woff2"),url(fonts/KaTeX_AMS-Regular.woff) format("woff"),url(fonts/KaTeX_AMS-Regular.ttf) format("truetype")}@font-face{font-family:KaTeX_Caligraphic;font-style:normal;font-weight:700;src:url(fonts/KaTeX_Caligraphic-Bold.woff2) format("woff2"),url(fonts/KaTeX_Caligraphic-Bold.woff) format("woff"),url(fonts/KaTeX_Caligraphic-Bold.ttf) format("truetype")}@font-face{font-family:KaTeX_Caligraphic;font-style:normal;font-weight:400;src:url(fonts/KaTeX_Caligraphic-Regular.woff2) format("woff2"),url(fonts/KaTeX_Caligraphic-Regular.woff) format("woff"),url(fonts/KaTeX_Caligraphic-Regular.ttf) format("truetype")}@font-face{font-family:KaTeX_Fraktur;font-style:normal;font-weight:700;src:url(fonts/KaTeX_Fraktur-Bold.woff2) format("woff2"),url(fonts/KaTeX_Fraktur-Bold.woff) format("woff"),url(fonts/KaTeX_Fraktur-Bold.ttf) format("truetype")}@font-face{font-family:KaTeX_Fraktur;font-style:normal;font-weight:400;src:url(fonts/KaTeX_Fraktur-Regular.woff2) format("woff2"),url(fonts/KaTeX_Fraktur-Regular.woff) format("woff"),url(fonts/KaTeX_Fraktur-Regular.ttf) format("truetype")}@font-face{font-family:KaTeX_Main;font-style:normal;font-weight:700;src:url(fonts/KaTeX_Main-Bold.woff2) format("woff2"),url(fonts/KaTeX_Main-Bold.woff) format("woff"),url(fonts/KaTeX_Main-Bold.ttf) format("truetype")}@font-face{font-family:KaTeX_Main;font-style:italic;font-weight:700;src:url(fonts/KaTeX_Main-BoldItalic.woff2) format("woff2"),url(fonts/KaTeX_Main-BoldItalic.woff) format("woff"),url(fonts/KaTeX_Main-BoldItalic.ttf) format("truetype")}@font-face{font-family:KaTeX_Main;font-style:italic;font-weight:400;src:url(fonts/KaTeX_Main-Italic.woff2) format("woff2"),url(fonts/KaTeX_Main-Italic.woff) format("woff"),url(fonts/KaTeX_Main-Italic.ttf) format("truetype")}@font-face{font-family:KaTeX_Main;font-style:normal;font-weight:400;src:url(fonts/KaTeX_Main-Regular.woff2) format("woff2"),url(fonts/KaTeX_Main-Regular.woff) format("woff"),url(fonts/KaTeX_Main-Regular.ttf) format("truetype")}@font-face{font-family:KaTeX_Math;font-style:italic;font-weight:700;src:url(fonts/KaTeX_Math-BoldItalic.woff2) format("woff2"),url(fonts/KaTeX_Math-BoldItalic.woff) format("woff"),url(fonts/KaTeX_Math-BoldItalic.ttf) format("truetype")}@font-face{font-family:KaTeX_Math;font-style:italic;font-weight:400;src:url(fonts/KaTeX_Math-Italic.woff2) format("woff2"),url(fonts/KaTeX_Math-Italic.woff) format("woff"),url(fonts/KaTeX_Math-Italic.ttf) format("truetype")}@font-face{font-family:"KaTeX_SansSerif";font-style:normal;font-weight:700;src:url(fonts/KaTeX_SansSerif-Bold.woff2) format("woff2"),url(fonts/KaTeX_SansSerif-Bold.woff) format("woff"),url(fonts/KaTeX_SansSerif-Bold.ttf) format("truetype")}@font-face{font-family:"KaTeX_SansSerif";font-style:italic;font-weight:400;src:url(fonts/KaTeX_SansSerif-Italic.woff2) format("woff2"),url(fonts/KaTeX_SansSerif-Italic.woff) format("woff"),url(fonts/KaTeX_SansSerif-Italic.ttf) format("truetype")}@font-face{font-family:"KaTeX_SansSerif";font-style:normal;font-weight:400;src:url(fonts/KaTeX_SansSerif-Regular.woff2) format("woff2"),url(fonts/KaTeX_SansSerif-Regular.woff) format("woff"),url(fonts/KaTeX_SansSerif-Regular.ttf) format("truetype")}@font-face{font-family:KaTeX_Script;font-style:normal;font-weight:400;src:url(fonts/KaTeX_Script-Regular.woff2) format("woff2"),url(fonts/KaTeX_Script-Regular.woff) format("woff"),url(fonts/KaTeX_Script-Regular.ttf) format("truetype")}@font-face{font-family:KaTeX_Size1;font-style:normal;font-weight:400;src:url(fonts/KaTeX_Size1-Regular.woff2) format("woff2"),url(fonts/KaTeX_Size1-Regular.woff) format("woff"),url(fonts/KaTeX_Size1-Regular.ttf) format("truetype")}@font-face{font-family:KaTeX_Size2;font-style:normal;font-weight:400;src:url(fonts/KaTeX_Size2-Regular.woff2) format("woff2"),url(fonts/KaTeX_Size2-Regular.woff) format("woff"),url(fonts/KaTeX_Size2-Regular.ttf) format("truetype")}@font-face{font-family:KaTeX_Size3;font-style:normal;font-weight:400;src:url(fonts/KaTeX_Size3-Regular.woff2) format("woff2"),url(fonts/KaTeX_Size3-Regular.woff) format("woff"),url(fonts/KaTeX_Size3-Regular.ttf) format("truetype")}@font-face{font-family:KaTeX_Size4;font-style:normal;font-weight:400;src:url(fonts/KaTeX_Size4-Regular.woff2) format("woff2"),url(fonts/KaTeX_Size4-Regular.woff) format("woff"),url(fonts/KaTeX_Size4-Regular.ttf) format("truetype")}@font-face{font-family:KaTeX_Typewriter;font-style:normal;font-weight:400;src:url(fonts/KaTeX_Typewriter-Regular.woff2) format("woff2"),url(fonts/KaTeX_Typewriter-Regular.woff) format("woff"),url(fonts/KaTeX_Typewriter-Regular.ttf) format("truetype")}.katex{text-rendering:auto;font:normal 1.21em KaTeX_Main,Times New Roman,serif;line-height:1.2;text-indent:0}.katex *{-ms-high-contrast-adjust:none!important;border-color:currentColor}.katex .katex-version:after{content:"0.13.19"}.katex .katex-mathml{clip:rect(1px,1px,1px,1px);border:0;height:1px;overflow:hidden;padding:0;position:absolute;width:1px}.katex .katex-html>.newline{display:block}.katex .base{position:relative;white-space:nowrap;width:-webkit-min-content;width:-moz-min-content;width:min-content}.katex .base,.katex .strut{display:inline-block}.katex .textbf{font-weight:700}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:KaTeX_SansSerif}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathnormal{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .boldsymbol{font-family:KaTeX_Math;font-style:italic;font-weight:700}.katex .amsrm,.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:KaTeX_SansSerif}.katex .mathboldsf,.katex .textboldsf{font-family:KaTeX_SansSerif;font-weight:700}.katex .mathitsf,.katex .textitsf{font-family:KaTeX_SansSerif;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{border-collapse:collapse;display:inline-table;table-layout:fixed}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;position:relative;vertical-align:bottom}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;font-size:1px;min-width:2px;vertical-align:bottom;width:2px}.katex .vbox{align-items:baseline;display:inline-flex;flex-direction:column}.katex .hbox{width:100%}.katex .hbox,.katex .thinbox{display:inline-flex;flex-direction:row}.katex .thinbox{max-width:0;width:0}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{border-bottom-style:solid;display:inline-block;width:100%}.katex .hdashline,.katex .hline,.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .rule,.katex .underline .underline-line{min-height:1px}.katex .mspace{display:inline-block}.katex .clap,.katex .llap,.katex .rlap{position:relative;width:0}.katex .clap>.inner,.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .clap>.fix,.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .clap>.inner,.katex .rlap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{border:0 solid;display:inline-block;position:relative}.katex .hline,.katex .overline .overline-line,.katex .underline .underline-line{border-bottom-style:solid;display:inline-block;width:100%}.katex .hdashline{border-bottom-style:dashed;display:inline-block;width:100%}.katex .sqrt>.root{margin-left:.27777778em;margin-right:-.55555556em}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.2em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:3.456em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.148em}.katex .fontsize-ensurer.reset-size1.size11,.katex .sizing.reset-size1.size11{font-size:4.976em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.83333333em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.16666667em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.5em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.66666667em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.4em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.88em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.45666667em}.katex .fontsize-ensurer.reset-size2.size11,.katex .sizing.reset-size2.size11{font-size:4.14666667em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.71428571em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.85714286em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.14285714em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.28571429em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.42857143em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.71428571em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.05714286em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.46857143em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:2.96285714em}.katex .fontsize-ensurer.reset-size3.size11,.katex .sizing.reset-size3.size11{font-size:3.55428571em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.75em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.875em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.125em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.25em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.5em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.8em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.16em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.5925em}.katex .fontsize-ensurer.reset-size4.size11,.katex .sizing.reset-size4.size11{font-size:3.11em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.55555556em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.66666667em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.77777778em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.88888889em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.11111111em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.6em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:1.92em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.30444444em}.katex .fontsize-ensurer.reset-size5.size11,.katex .sizing.reset-size5.size11{font-size:2.76444444em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.6em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.7em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.8em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.9em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.728em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.074em}.katex .fontsize-ensurer.reset-size6.size11,.katex .sizing.reset-size6.size11{font-size:2.488em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.41666667em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.5em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.58333333em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.66666667em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.75em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.83333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.2em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.44em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.72833333em}.katex .fontsize-ensurer.reset-size7.size11,.katex .sizing.reset-size7.size11{font-size:2.07333333em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.34722222em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.41666667em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.48611111em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.55555556em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.625em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.69444444em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.83333333em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.2em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.44027778em}.katex .fontsize-ensurer.reset-size8.size11,.katex .sizing.reset-size8.size11{font-size:1.72777778em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.28935185em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.34722222em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.40509259em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.46296296em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.52083333em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.5787037em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.69444444em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.83333333em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.20023148em}.katex .fontsize-ensurer.reset-size9.size11,.katex .sizing.reset-size9.size11{font-size:1.43981481em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.24108004em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.28929605em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.33751205em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.38572806em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.43394407em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.48216008em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.57859209em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.69431051em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.83317261em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .fontsize-ensurer.reset-size10.size11,.katex .sizing.reset-size10.size11{font-size:1.19961427em}.katex .fontsize-ensurer.reset-size11.size1,.katex .sizing.reset-size11.size1{font-size:.20096463em}.katex .fontsize-ensurer.reset-size11.size2,.katex .sizing.reset-size11.size2{font-size:.24115756em}.katex .fontsize-ensurer.reset-size11.size3,.katex .sizing.reset-size11.size3{font-size:.28135048em}.katex .fontsize-ensurer.reset-size11.size4,.katex .sizing.reset-size11.size4{font-size:.32154341em}.katex .fontsize-ensurer.reset-size11.size5,.katex .sizing.reset-size11.size5{font-size:.36173633em}.katex .fontsize-ensurer.reset-size11.size6,.katex .sizing.reset-size11.size6{font-size:.40192926em}.katex .fontsize-ensurer.reset-size11.size7,.katex .sizing.reset-size11.size7{font-size:.48231511em}.katex .fontsize-ensurer.reset-size11.size8,.katex .sizing.reset-size11.size8{font-size:.57877814em}.katex .fontsize-ensurer.reset-size11.size9,.katex .sizing.reset-size11.size9{font-size:.69453376em}.katex .fontsize-ensurer.reset-size11.size10,.katex .sizing.reset-size11.size10{font-size:.83360129em}.katex .fontsize-ensurer.reset-size11.size11,.katex .sizing.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .delimcenter,.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .accent>.vlist-t,.katex .op-limits>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{display:inline-block;min-width:1px}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{fill:currentColor;stroke:currentColor;fill-rule:nonzero;fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;display:block;height:inherit;position:absolute;width:100%}.katex svg path{stroke:none}.katex img{border-style:none;max-height:none;max-width:none;min-height:0;min-width:0}.katex .stretchy{display:block;overflow:hidden;position:relative;width:100%}.katex .stretchy:after,.katex .stretchy:before{content:""}.katex .hide-tail{overflow:hidden;position:relative;width:100%}.katex .halfarrow-left{left:0;overflow:hidden;position:absolute;width:50.2%}.katex .halfarrow-right{overflow:hidden;position:absolute;right:0;width:50.2%}.katex .brace-left{left:0;overflow:hidden;position:absolute;width:25.1%}.katex .brace-center{left:25%;overflow:hidden;position:absolute;width:50%}.katex .brace-right{overflow:hidden;position:absolute;right:0;width:25.1%}.katex .x-arrow-pad{padding:0 .5em}.katex .cd-arrow-pad{padding:0 .55556em 0 .27778em}.katex .mover,.katex .munder,.katex .x-arrow{text-align:center}.katex .boxpad{padding:0 .3em}.katex .fbox,.katex .fcolorbox{border:.04em solid;box-sizing:border-box}.katex .cancel-pad{padding:0 .2em}.katex .cancel-lap{margin-left:-.2em;margin-right:-.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:.08em}.katex .angl{border-right:.049em solid;border-top:.049em solid;box-sizing:border-box;margin-right:.03889em}.katex .anglpad{padding:0 .03889em}.katex .eqn-num:before{content:"(" counter(katexEqnNo) ")";counter-increment:katexEqnNo}.katex .mml-eqn-num:before{content:"(" counter(mmlEqnNo) ")";counter-increment:mmlEqnNo}.katex .mtr-glue{width:50%}.katex .cd-vert-arrow{display:inline-block;position:relative}.katex .cd-label-left{display:inline-block;position:absolute;right:calc(50% + .3em);text-align:left}.katex .cd-label-right{display:inline-block;left:calc(50% + .3em);position:absolute;text-align:right}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:block;text-align:center;white-space:nowrap}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{padding-left:2em;text-align:left}body{counter-reset:katexEqnNo mmlEqnNo}\n\n</style>\n</head>\n<body>\n<div class="html-container">\n';
var htmlSuffix = '</div></body></html>'