/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const stripe = require("stripe")(strapi.config.get("custom.STRIPE_SECRET"));
module.exports = {
  createPayment: async (ctx) => {
    const total = ctx.query.total;

    if (total <= 0) return;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total),
      currency: "usd",
      description: "test",
      shipping: {
        name: "Jenny Rosen",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  },
};
