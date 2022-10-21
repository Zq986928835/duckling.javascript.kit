/**
 * 日期类型的扩展函数
 */
interface Date {
    /**
     * 日期格式化
     * @param pattern 需要转换成的格式，如yyyy-MM-dd
     */
    format: (pattern?: string) => string
}
