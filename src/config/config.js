const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../../.env") });
const envVarsSchema = Joi.object()
  .keys({
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description("Mongo DB url"),
    JWT_SECRET: Joi.string().required().description("JWT secret key"),

    SMTP_SERVICE: Joi.string().description("service"),
    SMTP_PORT: Joi.number().description("port to connect to the service"),
    SMTP_USERNAME: Joi.string().description("username for email server"),
    SMTP_PASSWORD: Joi.string().description("password for email server"),
    EMAIL_FROM: Joi.string().description("the from field in the emails sent by the app"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: "key" } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
module.exports = {
  // env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL,
  },
  jwt: {
    secret: envVars.JWT_SECRET,
  },

  email: {
    smtp: {
      service: envVars.SMTP_SERVICE,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
  },
};
