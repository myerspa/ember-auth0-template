Skeleton for using Auth0 with Ember
===================================
## Environment variables
This project is setup using `ember-cli-dotenv`. As such, just create a `.env` file in your local directory.

Auth0 needs the following environment variables pulled from your Auth0 application settings:

```
AUTH0_CLIENT_ID=your_client_id_here
AUTH0_DOMAIN=your_client_id_here
```

For local development, make sure to add `http://localhost:4200` to your application settings in Auth0 for your `Allowed Callback URLs`, `Allowed Web Origins`, and `Allowed Logout URLs`.
