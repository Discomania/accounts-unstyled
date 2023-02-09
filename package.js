Package.describe({
  summary: 'Semantic UI Components for Useraccounts-React',
  version: '1.0.1',
  name: 'meteoreact:accounts-unstyled',
  git: 'https://github.com/royGil/useraccounts-react.git'
})

Package.onUse(api => {
  api.versionsFrom('2.9.0')

  api.use('ecmascript')
  api.mainModule('index.js', ['client', 'server'])
})
