const Model = require('./Model');

//テーブル名
const tableName = 'room';

class Room extends Model {
    constructor() {
        super(tableName);
    }

    /**
     * ページネーション用のデータ
     * @param {number} offset レコードの開始位置
     * @param {number} limit レコードの取得数
     * 
     * @returns {Array[object]} ページネーション用のレコード
     */
    async getPaginateData(offset, limit) {
        return await this.db.find().skip(offset).limit(limit).sort({ name: 1 });
    }
}

module.exports = Room;