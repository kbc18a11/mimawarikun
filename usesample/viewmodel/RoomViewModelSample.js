const RoomViewModel = require(__dirname + '/../../db/viewmodel/RoomViewModel');
const Room = require(__dirname + '/../../db/model/Room');

/**
 * 引数idから、部屋情報を取得
 * RoomViewModel.getRoomDataById('部屋のid');
 */
const getRoomDataById = async () => {
    console.log('getRoomDataById()');
    const data = await RoomViewModel.getRoomDataById('OgVrNT7XtsbkHMW0');
    console.log(data);
}
//getRoomDataById();

/**
 * ページネーション用の部屋情報の取得
 * RoomViewModel.getPagenateData(行の開始時刻, 取得数);
 */
const getPagenateData = async () => {
    console.log('getPagenateData()');
    const data = await RoomViewModel.getPagenateData(0, 5);
    console.log(data);
}
//getPagenateData();

/**
 * 部屋情報の追加
 * RoomViewModel.create(部屋名(番号), 利用するクラス名);
 */
const create = async () => {
    console.log('create()');
    const data = await RoomViewModel.create('788', 'ITE7');
    console.log(data);
}
//create();

/**
 * 部屋情報の削除
 * RoomViewModel.delete(削除したい部屋のid);
 */
const de = async () => {
    console.log('delete()');
    const data = await RoomViewModel.delete('QRkUTt65m5l0OQnm');
    console.log(data);
}
//de();

/**
 * 部屋情報の更新
 * RoomViewModel.update(更新したい部屋のid, 部屋名(番号), 利用するクラス名);
 */
const update = async () => {
    console.log('update()');
    const data = await RoomViewModel.update('bq2dfaYJnHjdnKGJ', 'aa', '782');
    console.log(data);
}
update();