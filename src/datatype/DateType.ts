/***
 * 初始化日期格式化函数
 */
export const dateFormatPrototypeInit = function () {

    /**
     * 日期格式化
     * @param pattern 需要转换成的格式，如yyyy-MM-dd
     */
    Date.prototype.format = function (pattern?: string): string {
        let date = this;

        if (!date) { return ''; }
        // 无效日期
        if (isNaN(date.getTime())) return '';

        if (!pattern) pattern = "yyyy-MM-dd";
        /**
         * 补零函数
         * @param value 初始字符串 
         * @param len 保留位数
         * @returns 
         */
        const zeroize = function (value: string, len: number = 2): string {
            value = '000' + value;
            return value.substring(value.length - len);
        };


        return pattern.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|M{1,4}|yy(?:yy)?|([hHmstT])\1?|[lLZ])\b/g, ($0: string): string => {
            switch ($0) {
                case 'd': return date.getDate().toString();
                case 'dd': return zeroize(date.getDate().toString());
                case 'ddd': return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][date.getDay()];
                case 'dddd': return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
                case 'M': return (date.getMonth() + 1).toString();
                case 'MM': return zeroize((date.getMonth() + 1).toString());
                case 'MMM': return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
                case 'MMMM': return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
                case 'yy': return new String(date.getFullYear()).substr(2);
                case 'yyyy': return date.getFullYear().toString();
                case 'h': return (date.getHours() % 12 || 12).toString();
                case 'hh': return zeroize((date.getHours() % 12 || 12).toString());
                case 'H': return date.getHours().toString();
                case 'HH': return zeroize((date.getHours()).toString());
                case 'm': return date.getMinutes().toString();
                case 'mm': return zeroize((date.getMinutes()).toString());
                case 's': return date.getSeconds().toString();
                case 'ss': return zeroize((date.getSeconds()).toString());
                case 'l': return date.getMilliseconds().toString();
                case 'll': return zeroize((date.getMilliseconds()).toString());
                case 'tt': return date.getHours() < 12 ? 'am' : 'pm';
                case 'TT': return date.getHours() < 12 ? 'AM' : 'PM';
            }
            return '';
        });
    };
}

