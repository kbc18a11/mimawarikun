const Room = require('../db/model/Room');

/**
 * create()のサンプル
 */
const createSample = async () => {
    console.log('create()のサンプル');

    //挿入するサンプルのデータ
    const createData = { name: '103', class: 'WB2' };

    const room = new Room();

    room.create(createData);

    console.log(await room.all());

};

//createSample();

/**
 * find()のサンプル
 */
const findSample = async () => {
    console.log('find()のサンプル');

    //挿入するサンプルのデータ
    const createData = { name: '101', class: 'ITE1' };

    const room = new Room();
    //挿入して、挿入したデータを取得
    const roomdata = await room.create(createData);

    console.log(roomdata);

    //_idからレコードを検索
    console.log(await room.find(roomdata._id));

};

//findSample();

/**
 * delete()のサンプル
 */
const deleteSample = async () => {
    console.log('delete()のサンプル');

    //挿入するサンプルのデータ
    const createData = { name: '101', class: 'ITE1' };

    const room = new Room();
    //挿入して、挿入したデータを取得
    const roomdata = await room.create(createData);

    console.log(roomdata);

    //_idからレコードを検索し、削除
    room.delete(roomdata._id);

    console.log(await room.all());
};
//deleteSample();

/**
 * deleteAll()のサンプル
 */
const deleteAllSample = async () => {
    console.log('deleteAll()のサンプル');

    const room = new Room();

    console.log(await room.all());
    //レコードを全て削除
    room.deleteAll();

    console.log(await room.all());
};
//deleteAllSample();

/**
 * getPaginateDataのサンプル
 */
const getPaginateDataSample = async () => {
    console.log('getPaginateData()のサンプル');

    const room = new Room();

    //レコードの開始位置
    const offset = 0;
    //レコードの取得数
    const limit = 5;
    console.log(await room.getPaginateData(offset, limit));
};
getPaginateDataSample();