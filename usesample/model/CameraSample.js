const Camera = require('../../db/model/Camera');
const Room = require('../../db/model/Room');

const init = require('../sampleInit');
/**
 * create()のサンプル
 */
const createSample = async () => {
    console.log('create()のサンプル');

    const createData = { name: '103', class: 'WB2' };
    const room = new Room();


    //挿入するサンプルのデータ
    const createData = { name: '103の全体', class: 'WB2' };

    const camera = new Camera();

    camera.create(createData);

    console.log(await camera.all());

};

//createSample();

/**
 * find()のサンプル
 */
const findSample = async () => {
    console.log('find()のサンプル');

    //挿入するサンプルのデータ
    const createData = { name: '101', class: 'ITE1' };

    const camera = new Camera();
    //挿入して、挿入したデータを取得
    const cameradata = await camera.create(createData);

    console.log(Cameradata);

    //_idからレコードを検索
    console.log(await camera.find(Cameradata._id));

};

//findSample();

/**
 * delete()のサンプル
 */
const deleteSample = async () => {
    console.log('delete()のサンプル');

    //挿入するサンプルのデータ
    const createData = { name: '101', class: 'ITE1' };

    const camera = new Camera();
    //挿入して、挿入したデータを取得
    const cameradata = await camera.create(createData);

    console.log(cameradata);

    //_idからレコードを検索し、削除
    Camera.delete(cameradata._id);

    console.log(await camera.all());
};
//deleteSample();

/**
 * deleteAll()のサンプル
 */
const deleteAllSample = async () => {
    console.log('deleteAll()のサンプル');

    const camera = new Camera();

    console.log(await camera.all());
    //レコードを全て削除
    camera.deleteAll();

    console.log(await camera.all());
};
//deleteAllSample();