module.exports = {
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "name": "mergeDeep",
        "range": [
          9,
          18
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "name": "dst",
          "range": [
            19,
            22
          ]
        },
        {
          "type": "Identifier",
          "name": "src",
          "range": [
            24,
            27
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
                      41,
                      45
                    ]
                  },
                  "init": null,
                  "range": [
                    41,
                    45
                  ]
                }
              ],
              "kind": "let",
              "range": [
                37,
                45
              ]
            },
            "right": {
              "type": "Identifier",
              "name": "src",
              "range": [
                49,
                52
              ]
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
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
                      "prefix": true,
                      "range": [
                        62,
                        78
                      ]
                    },
                    "right": {
                      "type": "Literal",
                      "value": "object",
                      "raw": "'object'",
                      "range": [
                        83,
                        91
                      ]
                    },
                    "range": [
                      62,
                      91
                    ]
                  },
                  "consequent": {
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
                                98,
                                101
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "attr",
                              "range": [
                                102,
                                106
                              ]
                            },
                            "range": [
                              98,
                              107
                            ]
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "range": [
                              110,
                              112
                            ]
                          },
                          "range": [
                            98,
                            112
                          ]
                        },
                        "range": [
                          98,
                          113
                        ]
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "mergeDeep",
                            "range": [
                              123,
                              132
                            ]
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "dst",
                                "range": [
                                  133,
                                  136
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "attr",
                                "range": [
                                  137,
                                  141
                                ]
                              },
                              "range": [
                                133,
                                142
                              ]
                            },
                            {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "src",
                                "range": [
                                  144,
                                  147
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "attr",
                                "range": [
                                  148,
                                  152
                                ]
                              },
                              "range": [
                                144,
                                153
                              ]
                            }
                          ],
                          "range": [
                            123,
                            154
                          ]
                        },
                        "range": [
                          123,
                          155
                        ]
                      }
                    ],
                    "range": [
                      93,
                      165
                    ]
                  },
                  "alternate": null,
                  "range": [
                    58,
                    165
                  ]
                },
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
                          168,
                          171
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "attr",
                        "range": [
                          172,
                          176
                        ]
                      },
                      "range": [
                        168,
                        177
                      ]
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "src",
                        "range": [
                          180,
                          183
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "attr",
                        "range": [
                          184,
                          188
                        ]
                      },
                      "range": [
                        180,
                        189
                      ]
                    },
                    "range": [
                      168,
                      189
                    ]
                  },
                  "range": [
                    168,
                    190
                  ]
                }
              ],
              "range": [
                54,
                193
              ]
            },
            "each": false,
            "range": [
              32,
              193
            ]
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "dst",
              "range": [
                202,
                205
              ]
            },
            "range": [
              195,
              206
            ]
          }
        ],
        "range": [
          29,
          208
        ]
      },
      "generator": false,
      "expression": false,
      "async": false,
      "range": [
        0,
        208
      ]
    }
  ],
  "sourceType": "module",
  "range": [
    0,
    208
  ]
}