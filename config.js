const env = process.env.NODE_ENV || "LOCAL";
const LOCAL = {
  server: {
    environment: "LOCAL",
    PORT: process.env.PORT,
    DOMAIN: process.env.DOMAIN || ".vetport.com",
  },
  db: {
    CONNECTION_STRING: process.env.MONGO,
  },
  BASE_PATH: process.env.BASE_PATH ?? "/",
  BEARER_MARKETPLACE_API: process.env.BEARER_MARKETPLACE_API,
  SECRET_TOKEN: process.env.SECRET_TOKEN || "mySecret",
  JWT_ACCESS_TOKEN_KEY: process.env.JWT_ACCESS_TOKEN_KEY || "vetflowToken",
  JWT_REFRESH_TOKEN_KEY:
    process.env.JWT_REFRESH_TOKEN_KEY || "vetflowapiRefreshToken",
};

const config = {
    LOCAL
};
  
module.exports = config[env];