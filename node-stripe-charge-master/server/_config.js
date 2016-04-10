var config = {};

// secret key (update in production as an env variable!!!)
config.secretKey = process.env.secretKey || "\x1d\x0fB\x8d'\xaa\xaf\x04\xca\xfe\n\xb8Vg\x95X\x9b\xd6\x18\xd60T`\xc6";

// mongo uri
config.mongoURI = {
  development: "mongodb://localhost/node-stripe-charge",
  test: "mongodb://localhost/node-stripe-charge-test",
  stage: process.env.MONGOLAB_URI
};

// stripe keys
// Add as env variables
// export "stripePublishableKey=pk_test_GlWIMKSHXgysofVp4kPEDz0f"
// export "githubClientSecret=sk_test_qean82JO2sUfkQQJLl2TC0e0"
config.StripeKeys = {
  publishableKey: 'pk_test_GlWIMKSHXgysofVp4kPEDz0f',
  secretKey: 'sk_test_qean82JO2sUfkQQJLl2TC0e0'
};

// mailgun keys
// Add as env variables
// export "mailgunUsername=GET_YOUR_OWN"
// export "mailgunPassword=GET_YOUR_OWN"
// config.mailgun = {
//   username: process.env.mailgunUsername,
//   password: process.env.mailgunPassword
// };



module.exports = config;