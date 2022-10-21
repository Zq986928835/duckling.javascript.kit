/**
 * Object类型的扩展函数
 */
interface Object {
    /**
     * Object格式化
     * @param pattern 需要转换成的格式
     */
    format: (pattern?: string) => string;
}

// declare const Object;