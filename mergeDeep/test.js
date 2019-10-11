const input = require('./input');

if (check(input)) {
    console.log('detected');
};

function check(root) {
    var root_params = [];
    var root_forin_params = {};
    var root_expressions = [];
    var src_name, property_name, root_func_name;

    traverse(root);
    
    if (!root_forin_params.src_name || !root_forin_params.property_name) return false;
    if (!root_params.includes(root_forin_params.src_name)) return false;
    src_name = root_forin_params.src_name;
    property_name = root_forin_params.property_name;


    for (let expression of root_expressions) {
        let { type, callee } = expression;
        if (type !== 'CallExpression' || callee.name !== root_func_name) continue;

        return true;
    }

    return false;

    function traverse(node) {
        if (!node) { return; }
        let { type, body, params, expression, left, right, consequent, alternate, id } = node;

        if (['Program', 'FunctionDeclaration', 'BlockStatement', 'ForInStatement', 'ExpressionStatement', 'IfStatement'].includes(type)) {
            if (type === 'FunctionDeclaration') {
                root_params = root_params.concat(params.map($=>$.name));
                root_func_name = id.name;
            } else if (type === 'ExpressionStatement') {
                root_expressions.push(expression);
            } else if (type === 'ForInStatement') {
                root_forin_params.src_name = right.name;
                root_forin_params.property_name = left.declarations[0].id.name;
            } else if (type === 'IfStatement') {
                body = [];
                if (consequent) body.push(consequent);
                if (alternate) body.push(alternate);
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

