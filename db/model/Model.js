const Nedb = require('nedb-promises');

class Model {
    /**
     * @param {string} tableName テーブル名
     */
    constructor(tableName) {
        //テーブル名
        this.tableName = tableName;

        //テーブル読み込み
        this.db = new Nedb({ filename: `../dbfile/${tableName}.db`, autoload: true });
    }

    /**
     * テーブル名の取得
     * @returns {string} テーブル名
     */
    get getTableName() {
        return this.tableName;
    }

    /**
     * テーブルのレコードをすべて取得
     * @returns {Array[object]} レコード
     */
    async all() {
        return await this.db.find({});
    }

    /**
     * レコードの挿入
     * @param {object} createData 
     * @returns {Array[object]} 挿入したレコード
     */
    async create(createData) {
        return await this.db.insert(createData);
    }

    /**
     * _idからレコードを検索し、削除
     * @param {string} _id 検索したいレコードの_id
     * @returns {Array[object]} 削除したレコード
     */
    async delete(_id) {
        return await this.db.remove({ _id: _id });
    }

    /**
     * テーブルのレコードすべて削除
     * @returns {Array[object]} 削除したレコード
     */
    async deleteAll() {
        return await this.db.remove({}, { multi: true });
    }

    /**
     * _idからレコードを検索
     * @param {string} _id 検索したいレコードの_id
     * @returns {Array[object]} 検索結果
     */
    async find(_id) {
        return await this.db.find({ _id: _id });
    }

}

module.exports = Model;