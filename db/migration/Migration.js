const NeDB = require('nedb');

class Migration {
    /**
     * @param {string} dbFileName 
     */
    constructor(dbFileName, sampleDatas) {
        //データベースファイル名
        this.dbFileName = dbFileName;

        //NeDBのインスタンス
        this.db = null;
    }

    /**
     * テーブル作成
     */
    createTable() {
        const filePath = '../dbfile/';

        this.db = new NeDB({
            filename: filePath + this.dbFileName
        });
        this.db.loadDatabase();
    }
}

module.exports = Migration;