const Room = require('../model/Room');
const RoomValidator = require('../validation/RoomValidation');

class RoomViewModel {
    /**
     * roomのページネーション用のデータ
     * 
     * @param {number} offset 開始位置
     * @param {number} limit 取得数
     * 
     * @returns {Array[object]} バリデーションエラーメッセージ or ページネーション用のデータ
     */
    static async getPagenateData(offset, limit) {
        const roomValidator = new RoomValidator();
        //バリデーションを実行
        roomValidator.getPagenateData(offset, limit);

        //バリデーションは失敗したか？
        if (roomValidator.fails) {
            //エラーメッセージを返す
            return roomValidator.errorMessages;
        }

        const room = new Room();
        //ページネーション用のデータを返す
        return await room.getPaginateData(offset, limit);
    }

    static async create(name, className) {
        const roomValidator = new RoomValidator();
        //バリデーションを実行
        roomValidator.create(name, className);
    }
}

module.exports = RoomViewModel;