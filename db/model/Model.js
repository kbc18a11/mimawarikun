const Nedb = require('nedb-promise');

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

    all() {
        this.db.find({});
    }

    create() {

    }

    find() {

    }

}