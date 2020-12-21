const Room = require('../model/Room');
const RoomValidator = require('../validation/RoomValidator');

class RoomViewModel {
    static getPagenateData(offset, limit) {
        const roomValidator = new roomValidator();
        roomValidator.getPagenateData(offset, limit);
    }
}

module.exports = RoomViewModel;