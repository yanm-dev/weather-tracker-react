import React from 'react';
import { DataTable, Label } from 'jmdesign';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

import moment from 'moment';
import './weatherstyle.scss';

export default function WeatherChart(props) {
  const { weatherData } = props;

  const data = weatherData.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  const tempData = data.map(obj => {
    const rObj = {};
    rObj.Date = moment(obj.date).format('MM/DD/YY');
    rObj['Avg Temp'] = obj.avg_temp;
    return rObj;
  });

  function formatXAxis(tickTime) {
    return moment(tickTime).format('MM/DD/YY');
  }

  return (
    <div className="city-weather-data">
      <ResponsiveContainer height={600}>
        <LineChart
          height={500}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="avg_temp" stroke="#8884d8" />
          <XAxis
            dataKey="date"
            padding={{ bottom: 15, top: 15 }}
            tickFormatter={formatXAxis}
          />

          <YAxis />
        </LineChart>
      </ResponsiveContainer>
      <Label label="Date" />
      <DataTable currencyColumns={[]} data={tempData} />
    </div>
  );
}
