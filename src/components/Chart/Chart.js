import React from "react";
import "./chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // This returns an array of values
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  // this returns the largest number from the array above. We use the spread operator to pull out all values from the array and pass as consecutive values
  const totalMaximumValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximumValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
