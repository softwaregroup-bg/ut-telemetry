# ut-telemetry

Performance monitoring and logging module

## Usage

Just add it to server/index array of modules:

```js
module.exports = (...params) => [{
    main: require.resolve('ut-telemetry'),
    pkg: require.resolve('ut-telemetry/package.json')
}]
```

## Configuration

Logging

```json
{
    "utPortConsole": {
        "server": {
            "address": "0.0.0.0",
            "port": 30001
        },
        "jwt": {
            "key": "..."
        },
        "ssoAuthUrl": "http://host:8004/admin.html#/sso/console/",
        "cookie": {
            "isSecure": false,
            "isHttpOnly": false,
            "clearInvalid": false,
            "strictHeader": false
        }
    }
}
```

Performance monitoring

```json
{
    "performance": {
        "impl": "...",
        "prometheus" : true
    }
}
```
