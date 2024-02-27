export interface Chart {
}

export interface StyleOptions {
  width: string;
  height: string;
}

export interface DataPoint{
  label: string;
  y?: number;
  x?: number;
}

export interface Axis {
  text?: string;
  suffix?: string;
  lineColor?: string,
  tickColor?: string,
  labelFontColor?: string,
  labelAngle?: number;
  includeZero?: boolean,
  title?: string,
  labelMaxWidth?: number,
  labelTextAlign?: string,
  // labelAngle: number,
}

export interface ChartOptionsTitle{
  text?: string;
  title?: string
  fontColor?: string;
}

export interface ChartOptionsData {
  type: string,
  name: string,
  yValueFormatString?: string,
  dataPoints: DataPoint[],
}

export interface ChartOptions {
  title: ChartOptionsTitle;
  axisY: Axis;
  axisY2?: Axis;
  axisX: Axis,
  axisX2?: Axis,
  data: ChartOptionsData[],
  styleOptions?: StyleOptions;
}


// export {
//   StyleOptions,
//   Chart, QuestionsPareto,
// }
