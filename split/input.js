module.exports = {
  "type": "Program",
  "start": 0,
  "end": 55,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 3,
      "column": 1
    }
  },
  "range": [
    0,
    55
  ],
  "comments": [],
  "sourceType": "module",
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 55,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 3,
          "column": 1
        }
      },
      "range": [
        0,
        55
      ],
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "loc": {
          "start": {
            "line": 1,
            "column": 9
          },
          "end": {
            "line": 1,
            "column": 16
          },
          "identifierName": "explode"
        },
        "range": [
          9,
          16
        ],
        "name": "explode",
        "_babelType": "Identifier"
      },
      "generator": false,
      "async": false,
      "expression": false,
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 24,
          "loc": {
            "start": {
              "line": 1,
              "column": 17
            },
            "end": {
              "line": 1,
              "column": 24
            },
            "identifierName": "keyword"
          },
          "range": [
            17,
            24
          ],
          "name": "keyword",
          "_babelType": "Identifier"
        },
        {
          "type": "Identifier",
          "start": 26,
          "end": 29,
          "loc": {
            "start": {
              "line": 1,
              "column": 26
            },
            "end": {
              "line": 1,
              "column": 29
            },
            "identifierName": "str"
          },
          "range": [
            26,
            29
          ],
          "name": "str",
          "_babelType": "Identifier"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 55,
        "loc": {
          "start": {
            "line": 1,
            "column": 31
          },
          "end": {
            "line": 3,
            "column": 1
          }
        },
        "range": [
          31,
          55
        ],
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 34,
            "end": 53,
            "loc": {
              "start": {
                "line": 2,
                "column": 1
              },
              "end": {
                "line": 2,
                "column": 20
              }
            },
            "range": [
              34,
              53
            ],
            "expression": {
              "type": "CallExpression",
              "start": 34,
              "end": 52,
              "loc": {
                "start": {
                  "line": 2,
                  "column": 1
                },
                "end": {
                  "line": 2,
                  "column": 19
                }
              },
              "range": [
                34,
                52
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 34,
                "end": 43,
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 1
                  },
                  "end": {
                    "line": 2,
                    "column": 10
                  }
                },
                "range": [
                  34,
                  43
                ],
                "object": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 37,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 1
                    },
                    "end": {
                      "line": 2,
                      "column": 4
                    },
                    "identifierName": "str"
                  },
                  "range": [
                    34,
                    37
                  ],
                  "name": "str",
                  "_babelType": "Identifier"
                },
                "property": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 43,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 5
                    },
                    "end": {
                      "line": 2,
                      "column": 10
                    },
                    "identifierName": "split"
                  },
                  "range": [
                    38,
                    43
                  ],
                  "name": "split",
                  "_babelType": "Identifier"
                },
                "computed": false,
                "_babelType": "MemberExpression"
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 44,
                  "end": 51,
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 11
                    },
                    "end": {
                      "line": 2,
                      "column": 18
                    },
                    "identifierName": "keyword"
                  },
                  "range": [
                    44,
                    51
                  ],
                  "name": "keyword",
                  "_babelType": "Identifier"
                }
              ],
              "_babelType": "CallExpression"
            },
            "_babelType": "ExpressionStatement"
          }
        ],
        "_babelType": "BlockStatement"
      },
      "_babelType": "FunctionDeclaration"
    }
  ]
}
