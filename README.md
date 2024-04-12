# Balatro API

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Endpoints

### Jokers

#### Retrieve All Jokers
- **Method**: `GET`
- **Endpoint**: `/joker/all`
- **Description**: Returns a list of all available jokers.

#### Retrieve Joker by ID
- **Method**: `GET`
- **Endpoint**: `/joker/{id}`
- **Description**: Returns the joker with the specified ID.

#### Retrieve Joker by Rarity
- **Method**: `GET`
- **Endpoint**: `/joker/rarity/{rarity}`
- **Description**: Returns the joker with the specified rarity. Possible rarities are common, uncommon, rare, or legendary.

## Made by Lurnok