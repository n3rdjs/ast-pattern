module.exports = {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "regex",
          "range": [
            9,
            14
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "name": "str",
            "range": [
              15,
              18
            ]
          }
        ],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "RegExp",
                  "range": [
                    27,
                    33
                  ]
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "str",
                    "range": [
                      34,
                      37
                    ]
                  }
                ],
                "range": [
                  23,
                  38
                ]
              },
              "range": [
                23,
                39
              ]
            }
          ],
          "range": [
            20,
            41
          ]
        },
        "generator": false,
        "expression": false,
        "async": false,
        "range": [
          0,
          41
        ]
      }
    ],
    "sourceType": "module",
    "range": [
      0,
      41
    ]
  }