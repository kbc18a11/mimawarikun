const Validator = require('validatorjs');

class Validation {
    /**
     * @param {object} rulesErrorMesages ルール事のエラーメッセージ
     * @param {Array[object]} customRules 独自バリデーションルールの配列
     */
    constructor(rulesErrorMesages) {
        //バリデーションエラーのメッセージ
        this.errorMessages = {
            errors: {}
        };

        //バリデーションルールごとのエラーメッセージ
        this.rulesErrorMesages = rulesErrorMesages;

        //バリデーションが失敗したかどうか？
        this.fails = false;
    }


    setCustomRulesErrorMessagesTmplate() {
    }

    newValidator(data, rules) {
        const validator = new Validator(data, rules, this.rulesErrorMesages);

        //バリデーションの結果を
        this.fails = validator.fails();

        //バリデーションは失敗したか？
        if (this.fails) {
            //エラーメッセージを代入
            this.errorMessages = validator.errors;
        }
    }
}
module.exports = Validation;