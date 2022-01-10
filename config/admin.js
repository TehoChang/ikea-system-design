module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3612fbd4bc68dbdfcedfba47667f0d0d'),
  },
});
