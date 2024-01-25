// 定义获取时间接口的ts类型
export interface TimeResult {
  code: number;
  message: string;
  result: Result;
}

export interface Result {
  date: string;
  dateTime: string;
  time: string;
  weekday: string;
}
