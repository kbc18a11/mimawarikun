const Room = require('../model/Room');

/**
 * create()のサンプル
 */
const createSample = async () => {
    //挿入するサンプルのデータ
    const createData = { name: '101', class: 'ITE1' };

    const room = new Room();

    room.create(createData);

    console.log(await room.all());

    room.deleteAll();
};

//createSample();

/**
 * find()のサンプル
 */
const findSample = async () => {
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
deleteSample();