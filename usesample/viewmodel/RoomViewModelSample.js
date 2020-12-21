const RoomViewModel = require('../../db/viewmodel/RoomViewModel');
const getPagenateData = async () => {
    const data = await RoomViewModel.getPagenateData(0, 5);
    console.log(data);
}
getPagenateData();