module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/installation',
        permanent: false,
      },
    ]
  },
}