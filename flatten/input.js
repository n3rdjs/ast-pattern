module.exports = {
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "flatten",
        "range": [
          9,
          16
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "name": "arr",
          "range": [
            17,
            20
          ]
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "arr",
                  "range": [
                    25,
                    28
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "flat",
                  "range": [
                    29,
                    33
                  ]
                },
                "range": [
                  25,
                  33
                ]
              },
              "arguments": [],
              "range": [
                25,
                35
              ]
            },
            "range": [
              25,
              36
            ]
          }
        ],
        "range": [
          22,
          38
        ]
      },
      "generator": false,
      "expression": false,
      "async": false,
      "range": [
        0,
        38
      ]
    }
  ],
  "sourceType": "module",
  "range": [
    0,
    38
  ]
}
