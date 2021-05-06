export const schema = {
  "type": "object",
  "properties": {
    "taps":{
      "type": "array",
      "minItems": 3,
      "maxItems": 10,
      "items":{
        "$ref": "#/definitions/tap",
        "unique": true
      }
    },
    "beers":{
      "type": "array",
      "minItems": 3,
      "maxItems": 50,
      "items": {
        "$ref": "#/definitions/beer"
      }
    }
  },
  "definitions":{
    "tap":{
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "unique": true,
          "minimum": 1,
          "maximum": 100
        },
        "name": {
          "type": "string",
          "faker" : "lorem.word"
        },
        "beer": {
          "$ref": "#/definitions/beer"
        }
      },
      "required": ["id", "beer"]
    },
    "beer": {
      "type": "object",
      "properties":{
        "id":{
          "type": "integer",
          "unique": true,
          "minimum": 1,
          "maximum": 300
        },
        "brewer": {
          "type": "string",
          "faker": "company.companyName"
        },
        "name": {
          "type": "string",
          "faker": "commerce.productName"
        },
        "abv": {
          "type": "string",
          "faker": {
            "finance.amount": [3,18,1]
          }
        },
        "ibu": {
          "type": "integer",
          "minimum": 4,
          "maximum": 140
        },
        "description":{
          "type": "string",
          "faker": "commerce.productDescription"
        }
      },
      "required": ["id", "brewer", "name", "abv", "ibu", "description"]
    },
    "required": ["taps", "beers"]
  }
}
