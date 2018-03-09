var htmlparser = require('htmlparser2')

var parser = new htmlparser.Parser({
	onopentag: function (name, attribs) {
		console.log('start-->', name, attribs);
	},
	ontext: function (text) {
		console.log("text-->", text);
	},
	onclosetag: function (tagname) {
		console.log('end-->', tagname);
	}
}, { decodeEntities: true });
parser.write("Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>");
parser.end();