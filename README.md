# mining-monitor-auth
Authenticator for the Mining Monitor Graph Ql API

# Setup

## Environment 

Add the JWT token private key used in hasura host to the env file 
- JWT_TOKEN_PRIVATE_KEY=

## Development

     npm start
# Endpoints 

`POST -  /api/v1/create-auth-token`
 
- Generates an Anonymous JWT Token 
### Response 

```json
{
    "status": 200,
    "data": {
        "token": ""
    }
}
```
