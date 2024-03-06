import React from 'react';
import { Avatar, Card, Label } from 'jmdesign';

import WeatherChart from './WeatherChart';

export default function Weather(props) {
  const { locations } = props;

  return (
    <div>
      {!locations.loading
        ? locations.locations.map(location => {
            return (
              <Card customClass="weather-cards">
                <Avatar
                  label={location.attributes.name}
                  subLabel={`Lat:  ${location.attributes.latitude}, Lng:  ${location.attributes.longitude}`}
                  initials={location.attributes.name
                    .split(' ')
                    .reduce((a, b) => a + b[0], '')}
                />

                <Label
                  label="Average Temperature by Day"
                  weight="Bolder"
                  labelColor="dark"
                  customClass="graph-title"
                />
                <WeatherChart weatherData={location.attributes.days} />
              </Card>
            );
          })
        : ''}
    </div>
  );
}
