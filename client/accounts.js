Accounts.ui.config({
  requestPermissions: {
    facebook: ['email','public_profile'],
    google: ['profile','email']
  },
  requestOfflineToken: {
    google: true
  },
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

