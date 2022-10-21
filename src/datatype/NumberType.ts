/**
 * Object 类型的扩展函数
 */



/***
 * 初始化
 */
export const numberPrototypeInit = function () {
    /**
     * 日期格式化，将当前变量作为时间戳
     * @param pattern 需要转换成的格式，如yyyy-MM-dd
     */
    Number.prototype.format = function (pattern: string = "yyyy-MM-dd"): string {
        return new Date(this as number).format(pattern);
    };
}
