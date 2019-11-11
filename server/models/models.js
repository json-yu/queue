const { Pool } = require('pg');

const PG_URI = process.env.PG_URI;


const pool = new Pool({
    connectionString: 'postgres://uihkvytp:W2m1NcE0skYtfstOkJtLAMnuyuV8daFi@salt.db.elephantsql.com:5432/uihkvytp'
});

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };
