module.exports = ({ env }) => ({
  STRIPE_SECRET: env("STRIPE_SECRET"),
});
