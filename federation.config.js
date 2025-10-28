const { withNativeFederation } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'demo-remote-1',

  exposes: {
    './Exports': './src/app/app.exports.ts'
  },

  shared: {
    '@angular/common': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    }
  }
});
