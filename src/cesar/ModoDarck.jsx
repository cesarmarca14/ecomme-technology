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
      <button onClick={toggle}>
        {Darck ? <i className="bi bi-moon"></i> : <i className="bi bi-sun-fill"></i>}
      </button>
    </>
  );
};

export default ModoDarck;