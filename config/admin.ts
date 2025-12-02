export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    allowedOrigins: ['http://localhost:3000'],
    handlers: {
      'api::article.article': {
        async publish({ draft, published }) {
          // In a real-world scenario, you would probably want to generate a more complex URL
          // with a secret token to prevent unauthorized access to your draft content.
          return `http://localhost:3000/api/preview?slug=${draft.slug}`;
        },
      },
    },
  },
});
