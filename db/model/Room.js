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

    /**
     * nameからレコードを検索
     * @param {string} name 
     * 
     * @returns {Array[object]} 検索結果
     */
    async findByName(name) {
        return await this.db.find({ name: name });
    }

    /**
     * classからレコードを検索
     * @param {string} className 
     * 
     * @returns {Array[object]} 検索結果
     */
    async findByClassName(className) {
        return await this.db.find({ class: className });
    }
}

module.exports = Room;