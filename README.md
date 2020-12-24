# Gofood

Un-official Gofood API Wrapper. API end point known from [https://gofood.co.id](https://gofood.co.id/).

## Documentation

### Getting Started

- Using npm

``` npm
npm i gofood
```

- Using yarn

``` npm
yarn add gofood
```

- Include Gofood module

``` ts
import gf from 'gofood'
```

### Usage API

Get Restaurant By Id

``` ts
const restaurant = await gf.getRestaurant(restaurantId, location)
```

Get the nearest restaurant

``` ts
const result = await gf.getRestaurants(location, page, searchId)
```

`location` examples are `-6.2174945,106.8178377`.

`searchId` obtained from result page 1.
