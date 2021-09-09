// This is where you store the token for the discord server
// to allow use of require and module types
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// config props
var config = require('./config.json');

export class token {
    static getToken() {
        // drice server
        return config.ServerToken
        // warrior server
        // return config.warriorServerToken
      }
}