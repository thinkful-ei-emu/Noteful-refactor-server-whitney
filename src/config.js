module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  CLIENT_ORIGIN : process.env.CLIENT_ORIGIN || 'https://noteful-client.whitneysamwallace.now.sh',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://noteful@localhost/noteful',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://noteful@localhost/noteful_test'
};