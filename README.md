# yc-function-starter

## Prerequesites

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

Связать телеграмм-бота с облачной функцией:

```
https://api.telegram.org/bot<token>/setWebhook?url=<function_url>
```

## Frameworks

- https://serverless.com
- https://yandex.cloud
