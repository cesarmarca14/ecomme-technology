import { useState, useEffect } from 'react';

const ModoDarck = () => {
  const [Darck, setDark] = useState(true);

  const toggle = () => {
    setDark(!Darck);
  };

  useEffect(() => {
    document.body.className = Darck ? 'Darck Darck-color' : 'Ligth';
  }, [Darck]);

  return (
    <>
    
  <>
    <button className='' onClick={toggle}>
      {Darck ? <i className="fs-3 bi-moon"></i> : <i className="fs-3  bi-sun-fill"></i>}
    </button>
  </>

    </>
  );
};

export default ModoDarck;