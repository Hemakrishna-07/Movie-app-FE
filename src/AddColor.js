import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {

  const [color, setColor] = useState("");

  const styles = {
    background: color
  };

  const [colorList, setColorList] = useState(["plum", "orange", "yellow", "red", "skyblue"]);

  return (
    <div className="App">
      <input
        type="text"
        style={styles}
        placeholder='ColorName'
        onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr, i) => (<ColorBox key={i} color={clr} />))}

      {/* <p>The color is : {color}</p> */}
    </div>
  );
}
