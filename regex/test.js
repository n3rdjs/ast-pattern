const input = require('./input');

if (check(input)) {
    console.log('detected');
};

function check(root) {
    var root_params = [];
    var root_expressions = [];
    
    traverse(root);
    
    for (let expression of root_expressions) {
        let { type, arguments, callee } = expression;
        if (type !== 'NewExpression' || callee.name !== 'RegExp') continue;
        if (!root_params.includes(arguments[0].name)) continue;

        return true;
    }

    return false;

    function traverse(node) {
        if (!node) { return; }
        let { type, body, params, expression, left, right } = node;

        if (['Program', 'FunctionDeclaration', 'BlockStatement', 'ForInStatement', 'ExpressionStatement'].includes(type)) {
            if (type === 'FunctionDeclaration') {
                root_params = root_params.concat(params.map($ => $.name));
            } else if (type === 'ExpressionStatement') {
                root_expressions.push(expression);
            }
    
            if (body) {
                if (Array.isArray(body)) {
                    for (let el of body) {
                        traverse(el);
                    }
                } else {
                    traverse(body);
                }
            }
        }
    }
}    

