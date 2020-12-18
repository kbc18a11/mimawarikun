const Room = require('../model/Room');

//create()のサンプル
const createSample = async () => {
    //挿入するサンプルのデータ
    const createData = { name: '101', class: 'ITE1' };

    const room = new Room();

    room.create(createData);

    console.log(await room.all());

    room.deleteAll();
};

createSample();