/**
 * Object 类型的扩展函数
 */



/***
 * 初始化
 */
export const objectPrototypeInit = function () {
    /**
     * 格式化
     * @param pattern 需要转换成的格式，如yyyy-MM-dd
     */
    Object.prototype.format = function (pattern: string = "yyyy-MM-dd"): string {
        if (this instanceof Date) {
            // 日期格式化
            // 此处不会进来，因为会先匹配到日期的格式化函数
            throw '设计问题，请联系下管理员';
        } if (typeof this === "number") {
            return new Date(this).format(pattern);
        } else {
            return this?.toString() ?? "";
        }
    };
}
