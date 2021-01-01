const Validation = require(__dirname + '/./Validation');
const Room = require(__dirname + '/../model/Room');

//ルール事のエラーメッセージ
const rulesErrorMesages = {
    number: '数値を入力してください',
    required: '必要項目です',
    findByName: '既に存在する部屋です'
}

//独自バリデーションルール
const customRules = {
    name: {
        callback: async (name) => {
            const room = new Room();
            const roomData = await room.findByName(name);

            return roomData;
        },
        errorMesage: '既に存在する部屋です。'
    },
    id: {
        callback: async (id) => {
            const room = new Room();
            const roomData = await room.findById(id);

            return roomData;
        },
        errorMesage: '存在しないidです。'
    }
};

class RoomValidation extends Validation {
    constructor() {
        super(rulesErrorMesages);

    }

    /**
     * RoomViewModelのgetRoomDataById()のバリデーション
     * @param {*} id 対象の部屋のid
     */
    async getRoomDataById(id) {
        //バリデーションのルール
        const rules = {
            id: 'required'
        };

        //バリデーションの実行
        super.newValidator({ id: id }, rules);

        //idの存在を確認
        const roomData = await customRules.id.callback(id);

        //存在しないidか？
        if (!roomData.length) {
            //エラーメッセージの存在を定義
            this.fails = true;

            //idにエラーメッセージを追加
            this.errorMessages.errors.id = [customRules.id.errorMesage];
        }
    }


    /**
     * RoomViewModelのgetPagenateData()のバリデーション
     * @param {*} offset 始まりのぺージ
     * @param {*} limit 取得データ数
     */
    getPagenateData(offset, limit) {
        //バリデーションのルール
        const rules = {
            offset: 'required|integer',
            limit: 'required|integer'
        };

        //バリデーションの実行
        super.newValidator({ offset: offset, limit: limit }, rules);
    }

    /**
     * RoomViewModel.create()のバリデーション
     * 
     * @param {*} name 追加しようとする部屋名
     * @param {*} className 追加しようとするクラス名
     */
    async create(name, className) {
        //バリデーションのルール
        const rules = {
            name: 'required',
            class: 'required',
        };

        //バリデーションの実行
        super.newValidator({ name: name, class: className }, rules);

        //nameがすでに存在する部屋なのかを取得
        const roomData = await customRules.name.callback(name);

        //同じ名前の部屋名は存在するか？
        if (roomData.length) {
            //エラーメッセージの存在を定義
            this.fails = true;

            //nameにエラーメッセージを追加
            this.errorMessages.errors.name = [customRules.name.errorMesage];
        }
    }

    /**
     * RoomViewModel.delete()のバリデーション
     * @param {string} id 対象の部屋のid
     */
    async delete(id) {
        //バリデーションのルール
        const rules = {
            id: 'required'
        };

        //バリデーションの実行
        super.newValidator({ id: id }, rules);

        //idの存在を確認
        const roomData = await customRules.id.callback(id);

        //存在しないidか？
        if (!roomData.length) {
            //エラーメッセージの存在を定義
            this.fails = true;

            //idにエラーメッセージを追加
            this.errorMessages.errors.id = [customRules.id.errorMesage];
        }
    }
}
module.exports = RoomValidation;