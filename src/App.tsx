import { Cartesian3, Ion } from 'cesium';
import './App.css'
import { CameraFlyTo, CzmlDataSource, Entity, Viewer } from 'resium'

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiOWQ0OWUyNy1mNDA1LTRmNmQtYjg4MC0xOTZmMzcyZTIyYmUiLCJpZCI6MjIxODAyLCJpYXQiOjE3MTgyMDc1Mjd9.YF6zhxEFPyfxtbnAa143qr5lWM-rn9HDMScqxj0cx88';
const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
const pointGraphics = { pixelSize: 10 };

function App() {

  return (
    <Viewer full>
      <Entity position={position} point={pointGraphics}></Entity>
      <CameraFlyTo destination={Cartesian3.fromDegrees(20.483, 47.860, 6000)}></CameraFlyTo>
      <CzmlDataSource data={'./paths/simple.czml'}></CzmlDataSource>
    </Viewer>
  )
}

export default App
