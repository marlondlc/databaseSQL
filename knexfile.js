// Update with your config settings.
const setting = require('./settings.json')
/* - this is in line 2 and within development under module.export

Modify this generated file so that it requires your
settings json and uses the secret database credentials
from there instead of hardcoding them into this file. */


module.exports = {

  development: {
    client: setting.client,
    connection: {
      host: setting.hostname,
      user: setting.user,
      password: setting.password,
      database: setting.database
    }
  },
};

/** already done in the setting.json
 *You'll therefore need to modify the
 client to be pg instead of sqlite3 along
 with specifying the necessary configuration
 options for establish that connection.
 */






