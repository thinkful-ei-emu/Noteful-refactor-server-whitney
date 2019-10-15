module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  CLIENT_ORIGIN : process.env.CLIENT_ORIGIN || 'https://noteful-client.whitneysamwallace.now.sh',
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://aktcmtopaegyha:448fa89a624f1774a0bb554e9d1c72614481a77b6439d81b0b19d94840a08ebc@ec2-54-197-241-96.compute-1.amazonaws.com:5432/d3ghu6bblacl9n',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://noteful@localhost/noteful_test'
};