const Model = require('./Model');

//テーブル名
const tableName = 'room';

class Room extends Model {
    constructor() {
        super(tableName);
    }
}

module.exports = Room;