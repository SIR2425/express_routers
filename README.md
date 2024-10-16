# express_routers

## concept

node + express to demonstrate

- routing
- use of middleware
- use of routers
- import/export as modules

## routing

two routers are defined, one for page information routes, and the other for user management routes.

## simulated database

the app simulates a database in memory (thus after the app ends, all info is lost, and falls back to the data in the file).

## testing

### GET / (app info)

```shell
curl http://localhost:3000/
```

### GET /about (app about)

```shell
curl http://localhost:3000/about
```

### GET /users (list all users)

```shell
curl http://localhost:3000/users
```

### GET /user/1 (list user 1)

```shell
curl http://localhost:3000/users/1
```

### DELETE /user/1 (delete user 1)

```shell
curl -X DELETE http://localhost:3000/users/2
```

### POST /users (successfully create a new user)

```shell
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com"}'
```

### POST /users (fails to create a new user)

```shell
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "John Doe"}'
```
