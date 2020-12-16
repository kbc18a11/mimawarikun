const Migration = require('./Migration');

class RoomMigration extends Migration {
    constructor(dbFileName, sampleDatas) {
        super(dbFileName, sampleDatas);
    }
}

const roomMigration = new RoomMigration('room.db');

//テーブル作成を作成
roomMigration.createTable();

//コマンドライン引数(process.argv[2])に'sampleInsert'
//roomMigration.insertSampleData(sampleDatas);