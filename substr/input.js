module.exports = {
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "truncate",
        "range": [
          9,
          17
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "name": "str",
          "range": [
            18,
            21
          ]
        },
        {
          "type": "Identifier",
          "name": "len",
          "range": [
            23,
            26
          ]
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "str",
                  "range": [
                    38,
                    41
                  ]
                },
                "property": {
                  "type": "Identifier",
                  "name": "substr",
                  "range": [
                    42,
                    48
                  ]
                },
                "range": [
                  38,
                  48
                ]
              },
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "range": [
                    49,
                    50
                  ]
                },
                {
                  "type": "Identifier",
                  "name": "len",
                  "range": [
                    52,
                    55
                  ]
                }
              ],
              "range": [
                38,
                56
              ]
            },
            "range": [
              31,
              57
            ]
          }
        ],
        "range": [
          28,
          59
        ]
      },
      "generator": false,
      "expression": false,
      "async": false,
      "range": [
        0,
        59
      ]
    }
  ],
  "sourceType": "module",
  "range": [
    0,
    59
  ]
}
