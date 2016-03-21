// exports.config = {
//   capabilities: {
//             // You can use other browsers
//             // like firefox, phantoms, safari, IE (-_-)
//             'browserName': 'chrome'
//     },
//     specs: [
//              // We are going to make this file in a minute
//           'e2e/becomeAwesome.spec.js'
//     ],
//     jasmineNodeOpts: {
//             showColors: true,
//            defaultTimeoutInterval: 30000,
//           isVerbose: true,
//     },
//   allScriptsTimeout: 20000,
//     onPrepare: function(){
//           browser.driver.get('http://localhost:3000');
//   }
// };

exports.config = {
        capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {
                args: ['--disable-web-security']
            }
        },
        baseUrl: 'http://localhost:8100',
        specs: [
            'e2e/**/*.spec.js'
        ],
        jasmineNodeOpts: {
            isVerbose: true,
        }
};

// exports.config= {
//   seleniumAddress: 'http://localhost:4444/wd/hub',
//   specs: ['e2e/becomeAwesome.spec.js']
// }
