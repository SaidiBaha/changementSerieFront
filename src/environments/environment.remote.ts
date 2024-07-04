// environment.remote.ts
export const environment = {
    production: false, // set to true if remote environment should behave like production
    baseUrl: 'http://192.168.1.222:8088', // adjust the port if needed
    authConfig: {
      domain: 'dev-jt2h2d8bnouk3jlk.us.auth0.com',
      authority: 'https://dev-jt2h2d8bnouk3jlk.us.auth0.com',
      clientId: '2NIVgvIcJ55BeqgjPsv4TDOXeIDVrTLF',
      scope: 'openid profile offline_access',
      audience: 'https://dev-jt2h2d8bnouk3jlk.us.auth0.com/api/v2/',
      secureRoutes: ['http://192.168.1.222:8088/api/']
    }
  };
  