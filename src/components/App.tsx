import React from 'react';
import { Stage, Layer, Text, Circle, Group, Rect } from 'react-konva';
import { Html } from 'react-konva-utils';

import './App.css';
import { DotModel } from '../models/DotModel';
import { CommentModel } from '../models/CommentModel';
import { Grid, GridCellProps, GridColumn } from '@progress/kendo-react-grid';


const getData = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch('https://localhost:7079/api/Dot')
      .then(response => response.json())
      .then(data => {
        const res = data.result;
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

const parseDots = (data: any): any[] => {
  let arr: any[] = [];
  for(let element of data) {
    arr.push(
        new DotModel(element.id as string, 
                    element.x, element.y, 
                    element.radius, 
                    element.color, 
                    element.comments as CommentModel[])
      );
  }

  return arr;
}

const cellWithBackGround = (props: GridCellProps): any => {
  const currentText = props.dataItem.text;
  const currentColor = props.dataItem.backgroundColor;
  if (currentColor != null) {
    return (
      <td style={{ backgroundColor: currentColor }}>{currentText}</td>
    );
  }
  return (
    <td style={{ backgroundColor: "rgb(255, 255, 255)" }}>{currentText}</td>
  );
};


let value = await getData();
const INITIAL_STATE = parseDots(value);

const App = () => {
  const [dots, setDots] = React.useState(INITIAL_STATE);

  return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {dots.map((dot) => (
            
            <>
            <Group>
              <Circle
                  key={dot.id}
                  id={dot.id}
                  x={dot.x}
                  y={dot.y}
                  radius={dot.radius} 
                  fill={dot.color}
                />
                
                <Html>
                  <Grid 
                    style={{ 
                      position:'absolute',
                      top: dot.y + dot.radius,
                      left: dot.x - dot.radius,
                      display:'inline-block'
                    }} 
                    data={dot.comments}
                  >
                    <GridColumn 
                      field="text"
                      cell={cellWithBackGround}
                    />
                  </Grid>

                </Html>
            </Group>

            </>

          ))}
        </Layer>
      </Stage>
  );
};


export default App;
