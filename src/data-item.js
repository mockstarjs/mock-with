export default class DataItem {
    constructor(value, tags) {
        if (this._isMatchFormat(value)) {
            /**
             * 值，建议使用原始数据类型的值，比如字符串或者数字
             */
            this.value = value.value;

            /**
             * 标签数组，用于过滤
             * @type {Array}
             */
            this.tags = this._generateTags(value.tags);
        } else {
            /**
             * 值，建议使用原始数据类型的值，比如字符串或者数字
             */
            this.value = value;

            /**
             * 标签数组，用于过滤
             * @type {Array}
             */
            this.tags = this._generateTags(tags);
        }
    }

    isMe(value) {
        return this.value === value;
    }

    getData() {
        return this.value;
    }

    _isMatchFormat(data) {
        return data && data.value;
    }

    _generateTags(tags) {
        return (Array.isArray(tags) ? tags : []);
    }
}

