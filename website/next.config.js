module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://draculatheme.com/blog/sunsetting-dracula-ui',
        permanent: true,
      },
      {
        source: '/:any',
        destination: 'https://draculatheme.com/blog/sunsetting-dracula-ui',
        permanent: true,
      },
    ]
  },
}