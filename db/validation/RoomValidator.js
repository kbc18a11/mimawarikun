const Validation = require('./Validation');

const rulesErrorMesages = {
    number: '数値を入力してください',
    required: '必要項目です'
}

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
        super.newValidator({ offset, limit }, rules);
    }
}
module.exports = RoomValidation;