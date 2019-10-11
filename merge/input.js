module.exports = {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "merge",
          "range": [
            9,
            14
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "name": "dst",
            "range": [
              15,
              18
            ]
          },
          {
            "type": "Identifier",
            "name": "src",
            "range": [
              20,
              23
            ]
          }
        ],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ForInStatement",
              "left": {
                "type": "VariableDeclaration",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "name": "attr",
                      "range": [
                        37,
                        41
                      ]
                    },
                    "init": null,
                    "range": [
                      37,
                      41
                    ]
                  }
                ],
                "kind": "let",
                "range": [
                  33,
                  41
                ]
              },
              "right": {
                "type": "Identifier",
                "name": "src",
                "range": [
                  45,
                  48
                ]
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "dst",
                          "range": [
                            57,
                            60
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "attr",
                          "range": [
                            61,
                            65
                          ]
                        },
                        "range": [
                          57,
                          66
                        ]
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "src",
                          "range": [
                            69,
                            72
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "attr",
                          "range": [
                            73,
                            77
                          ]
                        },
                        "range": [
                          69,
                          78
                        ]
                      },
                      "range": [
                        57,
                        78
                      ]
                    },
                    "range": [
                      57,
                      79
                    ]
                  }
                ],
                "range": [
                  50,
                  85
                ]
              },
              "each": false,
              "range": [
                28,
                85
              ]
            }
          ],
          "range": [
            25,
            87
          ]
        },
        "generator": false,
        "expression": false,
        "async": false,
        "range": [
          0,
          87
        ]
      }
    ],
    "sourceType": "module",
    "range": [
      0,
      87
    ]
  }