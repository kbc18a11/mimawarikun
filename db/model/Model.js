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
     * テーブルの情報すべて取得
     * @returns {object}
     */
    async all() {
        return await this.db.find({});
    }

    /**
     * データの挿入
     * @param {object} createData 
     */
    async create(createData) {
        await this.db.insert(createData);
    }

    delete() {

    }

    /**
     * テーブルの中身すべて削除
     */
    async deleteAll() {
        await this.db.remove({}, { multi: true });
    }

    find() {

    }

}

module.exports = Model;