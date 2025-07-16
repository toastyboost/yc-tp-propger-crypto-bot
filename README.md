# yc-function-starter

## Prerequisites

```
npm i serverless -g
```

## Enviroment

```
touch .env.prod
```

## Commands

```
npm run build
npm run deploy
```

## Hook

Связать телеграмм-бота и облачную функцию:

```
https://api.telegram.org/bot<token>/setWebhook?url=<function_url>
```

## Frameworks

- https://serverless.com
- https://yandex.cloud
