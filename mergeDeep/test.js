const input = require('./input');

if (check(input)) {
    console.log('detected');
};

function check(root) {
    var root_params = [];
    var root_forin_params = {};
    var root_expressions = [];
    var src_name, property_name;

    traverse(root);
    
    if (!root_forin_params.src_name || !root_forin_params.property_name) return false;
    if (!root_params.includes(root_forin_params.src_name)) return false;
    src_name = root_forin_params.src_name;
    property_name = root_forin_params.property_name;

    for (let expression of root_expressions) {
        let { type, operator, left, right } = expression;
        if (type !== 'AssignmentExpression' || operator !== '=') continue;
        if (right.object.name !== src_name) continue;
        if (left.property.name !== right.property.name || left.property.name !== property_name) continue;

        return true;
    }

    return false;

    function traverse(node) {
        if (!node) { return; }
        let { type, body, params, expression, left, right } = node;

        if (['Program', 'FunctionDeclaration', 'BlockStatement', 'ForInStatement', 'ExpressionStatement'].includes(type)) {
            if (type === 'FunctionDeclaration') {
                root_params = root_params.concat(params.map($=>$.name));
            } else if (type === 'ExpressionStatement') {
                root_expressions.push(expression);
            } else if (type === 'ForInStatement') {
                root_forin_params.src_name = right.name;
                root_forin_params.property_name = left.declarations[0].id.name;
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

