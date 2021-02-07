const { parseStyles } = require('./utils.js');

module.exports = function (babel) {
    const { types: t } = babel;

    function isStyleString(node) {
        return node.name.name === 'style' && node.value.type === 'StringLiteral';
    }

    function buildObjectProperty(key, value) {
        return t.objectProperty(t.identifier(key), t.stringLiteral(value));
    }

    function buildObjectExpression(classObj) {
        return t.objectExpression(Object.entries(classObj).map(([key, value]) => buildObjectProperty(key, value)));
    }

    const JSXRootElementVisitor = {
        JSXAttribute({ node }) {
            if (isStyleString(node)) {
                const classObj = parseStyles(node.value.value);
                node.value = buildObjectExpression(classObj);
            }
        },
    };

    return {
        name: 'babel-plugin-react-string-style',
        visitor: {
            Program(path) {
                path.traverse(JSXRootElementVisitor);
            },
        },
    };
};
