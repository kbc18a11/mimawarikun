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
            offset: 'required|number',
            limit: 'required|number'
        };

        super.newValidator({ offset, limit }, rules);
    }
}