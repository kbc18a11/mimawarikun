const Room = require('../model/Room');
const RoomValidator = require('../validation/RoomValidator');

class RoomViewModel {
    static getPagenateData(offset, limit) {
        const roomValidator = new RoomValidator();
        //バリデーションを実行
        roomValidator.getPagenateData(offset, limit);

        //バリデーションは失敗したか？
        if (roomValidator.fails) {
            return roomValidator.
        }
    }
}

module.exports = RoomViewModel;