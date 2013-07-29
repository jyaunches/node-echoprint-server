/**
 * Configuration variables. These can be overridden in the per-system config file 
 */


//var herokuDbURL = process.env.CLEARDB_DATABASE_URL);

var url = process.env.CLEARDB_DATABASE_URL;

var settings = {}

if(url != null){
    var host = url.split('@')[1].split('?')[0].split('/')[0]
    var db_name = url.split('@')[1].split('?')[0].split('/')[1]

    var username = url.split('@')[0].replace('mysql://', '').split(':')[0]
    var pswd = url.split('@')[0].replace('mysql://', '').split(':')[1]
}

var log = require('winston');

var settings = {
  // Port that the web server will bind to
  web_port: 3306,
  
  // Database settings
  db_user: username || 'root',
  db_pass: pswd || '',
  db_database: db_name || 'echoprint',
  db_host: host ||'localhost',
  
  // Set this to a system username to drop root privileges
  run_as_user: '',
  
  // Filename to log to
  log_path: __dirname + '/logs/echoprint.log',
  // Log level. Valid values are debug, info, warn, error
  log_level: 'debug',
  
  // Minimum number of codes that must be matched to consider a fingerprint
  // match valid
  code_threshold: 10,
  
  // Supported version of echoprint-codegen codes
  codever: '4.12'
};

log.warn('Database is ' + settings.db_database + '@' + settings.db_host);

module.exports = settings;
