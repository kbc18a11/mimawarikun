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
            return roomData.length;
        },
        errorMesage: '既に存在する部屋です。'
    }
};

class RoomValidation extends Validation {
    constructor() {
        super(rulesErrorMesages);

    }
    /**
     * RoomViewModelのgetPagenateData()のバリデーション
     * @param {object} data 
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

        const roomData = await customRules.name.callback(name);
        //同じ名前の部屋名は存在するか？
        if (roomData) {
            //nameにエラーメッセージを追加
            this.errorMessages.errors.name = [customRules.name.errorMesage];
        }
    }
}
module.exports = RoomValidation;