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

### Blinds

#### Retrieve ALL Blinds
- **Method**: `GET`
- **Endpoint**: `/blind/all`
- **Description**: Returns a list of all available blinds.

#### Retrieve Blind by ID
- **Method**: `GET`
- **Endpoint**: `/blind/{id}`
- **Description**: Returns the blind with the specified ID.

### Boss blinds

#### Retrieve ALL boss blinds
- **Method**: `GET`
- **Endpoint**: `/bossblind/all`
- **Description**: Returns a list of all available boss blinds.

#### Retrieve boss blind by ID
- **Method**: `GET`
- **Endpoint**: `/bossblind/{id}`
- **Description**: Returns the boss blind with the specified ID.

## Made by Lurnok