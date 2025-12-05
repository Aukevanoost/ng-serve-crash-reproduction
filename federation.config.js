const { withNativeFederation, share } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'demo-remote-1',

  exposes: {
    './Exports': './src/app/app.exports.ts'
  },

  shared: {
    ...share({
      '@angular/core': {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      },
      '@angular/common': {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      }
    })

  }
});
