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
<<<<<<< HEAD
    
  <>
    <button className='' onClick={toggle}>
      {Darck ? <i className="fs-3 bi-moon"></i> : <i className="fs-3  bi-sun-fill"></i>}
    </button>
  </>

=======
      <button onClick={toggle}>
        {Darck ? <i className="fs-3 noche bi-moon"></i> : <i className="fs-2 dia bi-sun-fill"></i>}
      </button>
>>>>>>> 1dca1a4f0de8db0aaa877f8662c84bd289bda288
    </>
  );
};

export default ModoDarck;