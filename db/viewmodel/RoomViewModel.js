const Room = require(__dirname + '/../model/Room');
const RoomValidator = require(__dirname + '/../validation/RoomValidation');

class RoomViewModel {
    /**
     * 引数のidから部屋データを取得
     * 
     * @param {string} id 対象の部屋のid
     * 
     * @returns {Array[object]} idの部屋データ
     */
    static async getRoomDataById(id) {
        const roomValidator = new RoomValidator();
        //バリデーションを実行
        await roomValidator.getRoomDataById(id);

        //バリデーションは失敗したか？
        if (roomValidator.fails) {
            //エラーメッセージを返す
            return roomValidator.errorMessages;
        }

        return new Room().findById(id);
    }

    /**
     * roomのページネーション用のデータ
     *
     * @param {number} offset 開始位置
     * @param {number} limit 取得数
     *
     * @returns {object} バリデーションエラーメッセージ or ページネーション用のデータ
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

    /**
     * 部屋を追加する
     *
     * @param {*} name 追加しようとする部屋名
     * @param {*} className 追加しようとするクラス名
     *
     * @returns {object} バリデーションエラーメッセージ or 作成した部屋データ
     */
    static async create(name, className) {
        const roomValidator = new RoomValidator();
        //バリデーションを実行
        await roomValidator.create(name, className);

        //バリデーションは失敗したか？
        if (roomValidator.fails) {
            //エラーメッセージを返す
            return roomValidator.errorMessages;
        }

        return new Room().create({ name: name, class: className });
    }

    /**
     * 部屋データ削除
     * @param {*} id 対象の部屋のid
     */
    static async delete(id) {
        const roomValidator = new RoomValidator();
        //バリデーションを実行
        await roomValidator.delete(id);

        //バリデーションは失敗したか？
        if (roomValidator.fails) {
            //エラーメッセージを返す
            return roomValidator.errorMessages;
        }

        return new Room().delete(id);
    }
}

module.exports = RoomViewModel;
