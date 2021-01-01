const RoomViewModel = require(__dirname + '/../../db/viewmodel/RoomViewModel');
const Room = require(__dirname + '/../../db/model/Room');

const getRoomDataById = async () => {
    console.log('getRoomDataById()');
    const data = await RoomViewModel.getRoomDataById('OgVrNT7XtsbkHMW0');
    console.log(data);
}
getRoomDataById();

const getPagenateData = async () => {
    console.log('getPagenateData()');
    const data = await RoomViewModel.getPagenateData(0, 5);
    console.log(data);
}
//getPagenateData();

const create = async () => {
    console.log('create()');
    const data = await RoomViewModel.create('222', 'ITE7');
    console.log(data);
}
//create();

const de = async () => {
    console.log('delete()');
    const data = await RoomViewModel.delete('QRkUTt65m5l0OQnm');
    console.log(data);
}
//de();