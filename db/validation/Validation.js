const Validator = require('validatorjs');

class Validation {
    constructor(rulesErrorMesages) {
        //バリデーションエラーのメッセージ
        this.errorMessages = [];

        //バリデーションルールごとのエラーメッセージ
        this.rulesErrorMesages = rulesErrorMesages;

        //バリデーションが失敗したかどうか？
        this.fails = false;
    }

    /**
     * エラーメッセージの取得
     * @returns {string} エラーメッセージ
     */
    get getErrorMessages() {
        return this.errorMessages;
    }

    /**
     * バリデーションの結果(true:失敗,false:成功)
     * @returns {boolean}
     */
    get getFails() {
        return this.fails;
    }

    newValidator(data, rules) {
        const validator = Validator(data, rules, this.rulesErrorMesages);

        //バリデーションの結果を
        this.fails = validator.fails();

        //バリデーションは失敗したか？
        if (this.fails) {
            //エラーメッセージを代入
            this.errorMessages = validator.errors;
        }
    }
}