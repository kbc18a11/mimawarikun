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