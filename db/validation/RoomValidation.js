const Validation = require('./Validation');
const Room = require('../model/Room');

//ルール事のエラーメッセージ
const rulesErrorMesages = {
    number: '数値を入力してください',
    required: '必要項目です',
    findByName: '既に存在する部屋です'
}

//独自バリデーションルール
const customRules = {
    findByName: async () => {
        const room = new Room();
        return !await room.findByName(name);
    },
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

    async create(name, className) {
        //バリデーションのルール
        const rules = {
            name: 'required',
            class: 'required',
        };

        //バリデーションの実行
        super.newValidator({ name: name, class: className }, rules);

        //ライブラリのバリデーションは、成功したか？
        if (!this.fails) {

        }
    }
}
module.exports = RoomValidation;