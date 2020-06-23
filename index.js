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
		md: '# markdown text\n## link\n[google](http://www.google.com)\n\n## todo\n- xxx\n+ yyy\n\n## table\n|id|name|\n|-:|----|\n|1|Taro|\n\n## blockquote\n> Note: aaa\n\n## code\n```js\nvar x = 0;\nconsole.log(x);\n```\n\n## uml\nflowchart\n```uml\ngraph LR\nA[Start] --> B{Decision}\nB -->|false| C[/Execute/]\nB -->|true| D[/Stop/]\n```\n\n```uml\ngraph TB\nStart --> Stop\n```\nclass diagram\n```uml\nclassDiagram\nclassA <|-- classB : implements\nclassC *-- classD : composition\nclassE o-- classF : association\nCustomer "1" --> "*" Ticket\n```\n\nsequence diagram\n```uml\nsequenceDiagram\nAlice->>+John: Hello John, how are you?\nJohn-->>-Alice: Great!\n```\n\nstate diagram\n```uml\nstateDiagram\n[*] --> s1\ns1 --> s2: A transition\ns2 --> [*]\n```\n\n```uml\ngantt\ntitle A Gantt Diagram\ndateFormat YYYY-MM-DD\nsection Section\nA task:done, a1, 2020-01-01, 30d\nAnother task:after a1, 20d\nsection Section2\nTask in sec:crit, s2t1, 2020-01-12, 12d\nsecond task:active, 24d\nclick s2t1 call printTask("x")```\n\n',
		images: [
			dummyimg
		],
		html: ''
	};

	$scope.changed = function () {
		var toc = $scope.model.toc;
		var todo = $scope.model.todo;
		var md = $scope.model.md;
		var markedhtml = marked(md, { toc, todo });
		markedhtml = appendimage(markedhtml);
		$scope.model.html = $sce.trustAsHtml(markedhtml);
		setTimeout(function () {
			mermaid.init(undefined, ".lang-uml");
		}, 100);
	};

	$scope.loaded = function (res) {
		res.forEach(function (d) {
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
