/**
 * 格式化时间
 */
const timeFormatter = (val: string) => {
    let time: Date = new Date(val)
    type DateStringify = number | string
    let Year = time.getFullYear()
    let Month: DateStringify
    let Day: DateStringify
    let Hour: DateStringify
    let Minutes: DateStringify
    let Second: DateStringify
    JSON.stringify(time.getMonth() + 1).length == 2 ? Month = time.getMonth() + 1 : Month = "0" + JSON.stringify(time.getMonth() + 1)
    JSON.stringify(time.getDay()).length == 2 ? Day = time.getDay() : Day = "0" + JSON.stringify(time.getDay())
    JSON.stringify(time.getHours()).length == 2 ? Hour = time.getHours() : Hour = "0" + JSON.stringify(time.getHours())
    JSON.stringify(time.getMinutes()).length == 2 ? Minutes = time.getMinutes() : Minutes = "0" + JSON.stringify(time.getMinutes())
    JSON.stringify(time.getSeconds()).length == 2 ? Second = time.getSeconds() : Second = "0" + JSON.stringify(time.getSeconds())
    let NowDate = Year + '-' + Month + '-' + Day + ' ' + Hour + ':' + Minutes + ':' + Second
    return NowDate
}

export {
    timeFormatter
}