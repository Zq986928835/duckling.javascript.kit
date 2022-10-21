/**
 * 数字类型的扩展函数
 */
interface Number {
    /**
     * 日期格式化，将当前变量作为时间戳
     * @param pattern 需要转换成的格式，如yyyy-MM-dd
     */
    format: (pattern?: string) => string
}

// declare const Number;