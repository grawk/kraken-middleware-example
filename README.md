# kraken-middleware-example

Illustrates whitelisting and blacklisting of routes using the `route` property when registering 
middleware via `config.json`

Available routes on this app:

* /
* /foo/login
* /foo/bar
* /login
* /logout
* /login/failure
* /create
* /addCard/foo
* /autho

## Whitelisting

Apply this middleware only for routes /account*, /create*, /addCard*, /addBank*

```javascript
"risk": {
   "priority": 119,
   "enabled": true,
   "route": "\/((account|create|addCard|addBank))*",
   "module": {
       "name": "path:./middleware/conmid",
       "method": "risk"
   }
},
```

## Blacklisting

Apply to routes EXCEPT /login* and /logout*
```javascript
"autho": {
    "priority": 122,
    "enabled": true,
    "route": "\/((?!$))((?!login))((?!logout))*",
    "module": {
        "name": "path:./middleware/conmid",
        "method": "auth"
    }
},
```
