export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        "required": ["id", "firstName", "lastName", "email"]
      }
    },
     "taps": {
      "type": "array",
      "minItems": 3,
      "maxItems": 4,
      "items": {
        "type": "beer",
        "$ref": "#/definitions/beer"
        }
    },
    "beers":{
      "type": "array",
      "minItems": 3,
      "maxItems": 10,
      "items": {
        "type": "beer",
        "$ref": "#/definitions/beer"
      }
    }
  },
  "definitions":{
    "beer": {
      "type": "object",
      "properties":{
        "id":{
          "type": "number",
          "unique": true,
          "minimum": 1
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
          "type": "number",
          "minimum": 4,
          "maximum": 18
        },
        "ibu": {
          "type": "number",
          "minimum": 4,
          "maximum": 140
        },
        "description":{
          "type": "string",
          "faker": "lorem.paragraph"
        }
      },
      "required": ["id", "brewer", "name", "abv", "ibu", "description"]
    }
  },
  "required": ["users", "taps", "beers"]
  }
