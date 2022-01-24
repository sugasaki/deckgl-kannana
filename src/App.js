import React, { useState, useEffect } from 'react';
import { Switch, Typography } from 'antd';
import 'antd/dist/antd.css';

import { DeckGlMap } from './components/DeckGlMap';

const { Title } = Typography;

export default function App() {
  const [isLight, setisLight] = useState(true);

  const color = isLight ? 'dark' : 'light';
  const descriptionElement = `${color} mode`;
  const tileURL = `https://cartodb-basemaps-c.global.ssl.fastly.net/${color}_all/{z}/{x}/{y}.png`;

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `環七`;
  });

  return (
    <>
      <DeckGlMap isLight={isLight} tileURL={tileURL}>
        <div style={switchStyle}>
          <Title style={titleStyle} level={3} type='danger'>
            {descriptionElement}
          </Title>
          <Switch
            checkedChildren='Dark'
            unCheckedChildren='Light'
            defaultChecked
            onChange={(x) => setisLight(x)}
          />
        </div>
      </DeckGlMap>
    </>
  );
}

const switchStyle = {
  margin: 20,
};

const titleStyle = {
  display: 'inline',
  marginRight: 20,
};
