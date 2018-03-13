var htmlparser = require('htmlparser2')
let root, parentQueue = []
var parser = new htmlparser.Parser({
    onopentag: function (name, attribs) {
        if (!root) {
            root = createASTEle(name, attribs)
            parentQueue.push(root)
            return
        }
        let parent = parentQueue[parentQueue.length - 1]
        let ASTEle = createASTEle(name, attribs)
        if (!parent.children) {
            parent.children = []
        }
        parent.children.push(ASTEle)
        parentQueue.push(ASTEle)
    },
    ontext: function (text) {
        let parent = parentQueue[parentQueue.length - 1]
        let ASTText = createASTText(text)
        if (!parent.children) {
            parent.children = []
        }
        parent.children.push(ASTText)
    },
    onclosetag: function (tagname) {
        parentQueue.pop()
    }
}, { decodeEntities: true });
parser.write(`<div>ddd<input type="text" v-model="msg" required max="8" v-validate:field1.group1.group2>ddddd</div>`);


console.log(JSON.stringify(root, null, 4));


function createASTEle(name, attribs, parent) {

    return {
        tag: name,
        type: 1,
        attr: attribs
    }
}

function createASTText(text) {
    return {
        tag: 'text',
        type: 2,
        text
    }
}




