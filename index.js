/// <reference path="node_modules/@types/angular/index.d.ts" />
/// <reference path="node_modules/@types/mermaid/index.d.ts" />

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
	displayErrorInGui(err);
};
function printTask(name) {
	console.log(name);
}

var ngapp = angular.module('example-app', []);
ngapp.controller('MainController', ['$scope', '$sce', '$timeout', function ($scope, $sce, $timeout) {
	var dummyimg = { name: '(drop an image file here)' };
	$scope.htmlHidden = true;
	$scope.model = {
		toc: true,
		todo: true,
		vw: 5,
		md: '# markdown text\n## link\n[google](http://www.google.com)\n\n## todo\n- xxx\n+ yyy\n\n## table\n|id|name|\n|-:|----|\n|1|Taro|\n\n## blockquote\n> Note: aaa\n\n## code\n```js\nvar x = 0;\nconsole.log(x);\n```\n\n## uml\nflowchart\n```uml\ngraph LR\nA[Start] --> B{Decision}\nB -->|false| C[/Execute/]\nB -->|true| D[/Stop/]\n```\n\n```uml\ngraph TB\nStart --> Stop\n```\nclass diagram\n```uml\nclassDiagram\nclassA <|-- classB : implements\nclassC *-- classD : composition\nclassE o-- classF : association\nCustomer "1" --> "*" Ticket\n```\n\nsequence diagram\n```uml\nsequenceDiagram\nAlice->>+John: Hello John, how are you?\nJohn-->>-Alice: Great!\n```\n\nstate diagram\n```uml\nstateDiagram\n[*] --> s1\ns1 --> s2: A transition\ns2 --> [*]\n```\n\n```uml\ngantt\ntitle A Gantt Diagram\ndateFormat YYYY-MM-DD\nsection Section\nA task:done, a1, 2020-01-01, 30d\nAnother task:after a1, 20d\nsection Section2\nTask in sec:crit, s2t1, 2020-01-12, 12d\nsecond task:active, 24d\nclick s2t1 call printTask("x")```\n\n```uml\nerDiagram\nCUSTOMER ||--o{ ORDER : places\nORDER ||--|{ LINE-ITEM : contains\nCUSTOMER }|..|{ DELIVERY-ADDRESS : uses```\n\n# flowchart\n\n```flow\nst=>start: START\ne=>end: END\nio1=>inputoutput: Stdin\ncond=>condition: isBlank?\nsub1=>subroutine: func1\nop1=>operation: i++\nst->io1->cond\ncond(yes)->sub1->e\ncond(no)->op1->e\n```\n\n# chart\n\n```chart\n{\n	"type": "bar",\n	"data": {\n		"labels": ["Red", "Blue"],\n		"datasets": [\n			{\n				"label": "# of Votes",\n				"data": [12, 3],\n				"backgroundColor": ["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)"],\n				"borderColor": ["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)"],\n				"borderWidth": 1\n			}\n		]\n	},\n	"options": {\n		"scales": {\n			"y": {"beginAtZero": true}\n		}\n	}\n}\n```\n\n```chart\n{\n	"type": "line",\n	"data": {\n		"labels": ["Jan", "Feb", "Mar", "Apr"],\n		"datasets": [\n			{\n				"label": "My First Dataset",\n				"data": [65, 59, 80, 81],\n				"fill": false,\n				"borderColor": "rgb(75, 192, 192)",\n				"tension": 0.1\n			}\n		]\n	}\n}\n```\n\n```chart\n{\n	"type": "doughnut",\n	"data": {\n		"labels": [\n			"Red",\n			"Blue",\n			"Yellow"\n		],\n		"datasets": [{\n			"label": "My First Dataset",\n			"data": [300, 50, 100],\n			"backgroundColor": [\n			"rgb(255, 99, 132)",\n			"rgb(54, 162, 235)",\n			"rgb(255, 205, 86)"\n			],\n			"hoverOffset": 4\n		}]\n	},\n    "options": {\n        "responsive": true,\n		"plugins": {\n			"legend": {\n				"position": "right"\n			},\n			"title": {\n				"display": true,\n				"text": "Doughnut Chart"\n			}\n		}\n	}\n}\n```\n\n# tree\n\n```tree\n{\n  "opts": {\n    "space": {\n      "pad": 20,\n      "w": 100,\n      "h": 30\n    },\n    "rect": {\n      "w": 80,\n      "h": 20\n    }\n  },\n  "data": {\n    "(root)": {\n      "opt": {},\n      "usr": {\n        "bin": {},\n        "lib@mark": {\n          "cron": {},\n          "zsh": {}\n        },\n        "local": {\n          "bin": {}\n        },\n        "sbin": {}\n      }\n    }\n  }\n}\n```\n\n<!--```latex\n\\sum_{i=1}^{n} x_i\n```-->\n\n',
		images: [
			dummyimg
		],
		html: ''
	};

	$scope.changeViewWidth = function () {
		var i = $scope.model.vw * 10;
		var s = i + '%';
		var t = (100 - i) + '%';
		document.getElementById('text').style.minWidth = s;
		document.getElementById('ctrl').style.minWidth = t;
	};
	$scope.changed = function () {
		var toc = $scope.model.toc;
		var todo = $scope.model.todo;
		var md = $scope.model.md;
		var markedhtml = marked(md, { toc, todo });
		markedhtml = appendimage(markedhtml);
		$scope.model.html = $sce.trustAsHtml(markedhtml);

		setTimeout(function () {
			LatexIT.render('code');
		}, 100);

		setTimeout(function () {
			mermaid.init(undefined, ".lang-uml");

			document.querySelectorAll('.lang-tree').forEach(function (el) {
				try {
					var o = JSON.parse(el.innerText);
					// var svg = document.createElement('svg');
					// svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
					// svg.setAttribute('viewBox', '0 0 400 400');
					var pre = el.parentNode;
					var rootel = el.parentNode.parentNode;
					var svg = d3.select(rootel).append('svg');
	
					drawTreeView(svg, o.data, o.opts);
					console.log(svg.node());
					rootel.replaceChild(svg.node(), pre);
				} catch (err) {
					console.error(err);
				}
			});
			document.querySelectorAll('.lang-chart').forEach(function (el) {
				var o = JSON.parse(el.innerText);
				var canvas = document.createElement('canvas');
				var pre = el.parentNode;
				var rootel = el.parentNode.parentNode;
				rootel.replaceChild(canvas, pre);
				var ctx = canvas.getContext('2d');

				var myChart = new Chart(ctx, o);
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
		}, 100);
	};

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
		var res = [];
		var lastpos = 0;
		$scope.model.images.forEach(function (d) {
			recurse();

			function recurse() {
				var pos = html.indexOf('id="' + d.name + '"', lastpos);
				var pos2 = html.indexOf('>', pos);
				if (pos < 0 || pos2 < 0) return;

				res.push(html.substring(lastpos, pos));
				res.push('src="' + d.data + '" ');
				res.push(html.substring(pos, pos2 + 1));
				lastpos = pos2 + 1;
				recurse();
			}
		});
		res.push(html.substring(lastpos));
		return res.join('');
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

function drawTreeView(svg, data, opts) {
	opts = opts || {};
	opts.rect = opts.rect || {
		w: 80,
		h: 20
	};
	opts.space = opts.space || {
		pad: 20,
		w: 100,
		h: 30
	};
	/*
	{
		raw: true,
		w: 0,
		h: 0,
		// 描画する四角（ノード）のサイズ
		rect: {
			w: 80,
			h: 20
		},
		// ノード間のスペースなど
		space: {
			pad: 20,
			w: 100,
			h: 30
		}
	}*/

	/*
	// データ
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

	if (!opts.raw) data = convertRawData(data)[0];

	// ツリー用データ設定
	var root = d3.hierarchy(data);
	var tree = d3.tree();
	// treeレイアウトのためのx, y座標をデータに付与してくれる
	tree(root);
	// それぞれのノードが持つ末端ノードの数を算出して、"value"というキー名でノードのデータに付与
	root.count();
	// console.log(root);

	// 全体svg要素の高さと幅を計算し生成
	// 末端ノードの数 * ノードの高さ + (末端ノードの数 - 1) * (ノードの基準点どうしの縦幅 - ノードの高さ) + 上下の余白
	var height = opts.h || (root.value * opts.rect.h +
		(root.value - 1) * (opts.space.h - opts.rect.h) +
		opts.space.pad * 2);
	// (rootの高さ + 1) * ノードの幅 + rootの高さ * (ノードの基準点どうしの横幅 - ノードの幅) + 上下の余白
	// 最終的に90度回転した状態になるためrootの存在する高さで横幅を計算する
	var width = opts.w || ((root.height + 1) * opts.rect.w +
		root.height * (opts.space.w - opts.rect.w) +
		opts.space.pad * 2);

	svg.attr('width', width).attr('height', height);

	// 渡されたnameを含む階層階層を探索（同じparentの）
	function seekParent(d, name) {
		// 今処理しているノードの親の子たちを取得することでその階層のデータを取得
		var siblings = d.parent.children;
		// 取得した階層に、今探しているnameを含むものがいれば、それが目的の階層
		var target = siblings.find(function (d) {
			return d.data.name == name;
		});
		// 見つかればその階層をnameとセットで返却
		// 見つからなければ親を渡して再帰処理させることで一つ上の階層を探索させる
		return target ? { name: name, hierarchy: siblings } : seekParent(d.parent, name);
	}

	// 自分より上にいる末端ノードの数を配列として取り出す
	function calcLeaves(names, d) {
		// 親の含まれる階層をそれぞれ抽出する（nameと階層のJSONで）
		var eachHierarchies = names.map(function (name) {
			return seekParent(d, name)
		});
		// それぞれの階層における、そのnameの位置（インデックス）を取得
		var eachIdxes = eachHierarchies.map(function (item) {
			return item.hierarchy.findIndex(function (contents) {
				return contents.data.name == item.name;
			});
		});
		// 先ほど取得したインデックスを使って、それぞれの階層をスライスする
		var filteredHierarchies = eachHierarchies.map(function (item, idx) {
			return item.hierarchy.slice(0, eachIdxes[idx]);
		});
		// それぞれの階層に含まれるvalueを抽出
		var values = filteredHierarchies.map(function (hierarchy) {
			return hierarchy.map(function (item) {
				return item.value;
			});
		});
		// 平坦化して返却
		return values.flat();
	}

	// y座標の計算
	function defineY(data, spc) {
		// 親をたどる配列からバインドされたデータを抽出
		const ancestorValues = data.ancestors().map(function (item) {
			return item.data.name;
		});
		// 自分より上にいる末端ノードの数を配列として取り出す
		const leaves = calcLeaves(ancestorValues.slice(0, ancestorValues.length - 1), data);
		// ノードの数を合計
		const sumLeaves = leaves.reduce(function (previous, current) {
			return previous + current;
		}, 0);
		// y座標を計算 末端ノードの数 * ノードの基準点同士の縦幅 + 上の余白
		return sumLeaves * spc.h + spc.pad;
	}

	// 位置決め
	function definePos(treeData, spc) {
		treeData.each(function (d) {
			// x座標は 深さ * ノード間の幅 + 左側の余白
			d.x = d.depth * spc.w + spc.pad;
			d.y = defineY(d, spc);
		});
	}

	definePos(root, opts.space);

	// 全体をグループ化
	var g = svg.append('g');

	// path要素の追加
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

	// 各ノード用グループの作成
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
			// 四角
			me.append('rect')
				.attr('width', opts.rect.w)
				.attr('height', opts.rect.h);
		})
		.call(function (me) {
			// テキスト
			me.append('text')
				.text(function (d) {
					return d.data.name;
				})
				.attr('transform', 'translate(5, 15)');
		});
}