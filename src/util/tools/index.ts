/**
 * 格式化时间
 */
interface dateType {
  dateNumber: string | number
}


const timeFormatter = (time: string): string => {
  let date = new Date(time)
  let Year = date.getFullYear()
  let Month: dateType["dateNumber"] = date.getMonth() + 1
  let day: dateType["dateNumber"] = date.getDate();
  let hours: dateType["dateNumber"] = date.getHours();
  let minutes: dateType["dateNumber"] = date.getMinutes();
  let seconds: dateType["dateNumber"] = date.getSeconds();
  Month < 10 ? Month = '0' + Month : "";
  day < 10 ? day = '0' + day : "";
  hours < 10 ? hours = '0' + hours : "";
  minutes < 10 ? minutes = '0' + minutes : "";
  seconds < 10 ? seconds = '0' + seconds : "";
  let timeNow = Year + "-" + Month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
  return timeNow
}


export {
  timeFormatter
}
