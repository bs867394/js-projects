const accountId = 144553
let accountEmail = "bs@google.com"
var accountPassword = '12345'
accountCity = 'jaipur'
let accountState;// undefined

// accountId = 2 not allowed
/*prefer not to use var issue of block scope {} functional scope */

accountEmail = 'hc@hv.com'
accountPassword = "2121212121"
accountCity = "bengaluru"

 console.log(accountId)

 console.table([accountEmail,accountId,accountPassword,accountCity, accountState])