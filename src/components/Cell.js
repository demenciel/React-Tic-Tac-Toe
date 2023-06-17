import { useState, useEffect } from 'react';

const Cell = (props) => {
  const [active, setActive] = useState(false);
  const [circle, setCircle] = useState(false);
  const [cross, setCross] = useState(false);

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (props.game[props.row][props.cell] === 'x') {
          setCircle(false);
          setCross(true);
        } else if (props.game[props.row][props.cell] === 'o') {
          setCircle(true);
          setCross(false);
        } else {
          setCircle(false);
          setCross(false);
        }
      }
    }
  }, [props.game]);

  const handleClick = () => {
    if (props.game[props.row][props.cell] !== null || props.win !== null) {
      return;
    }
    setActive(!active);
    setTimeout(() => {
      setActive(active => !active);
    }, 300);
    if (props.playerTurn % 2 === 0) {
      props.updateMap('x', props.row, props.cell);
      setCircle(false);
      setCross(true);
    } else {
      return ;
    };
  };

  return (
    <div className={`container ${active ? 'active' : ''}`} style={props.style} onClick={handleClick}>
      <div className='cell'>
        <div className={`${circle ? 'circle' : cross ? 'cross' : ''}`}></div>
      </div>
    </div>
  );
};

export default Cell;
