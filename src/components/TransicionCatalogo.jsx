import { useState, useEffect } from 'react';

function TransicionCatalogo({ categoria }) {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    setTimeout(() => setZoom(true), 50);
    setTimeout(() => setZoom(false), 700);
  }, []);

  return (
    <div className="transicion-overlay activa">
      <img
        src={categoria === 'him' ? '/logo-him.png' : '/logo-her.png'}
        alt=""
        className={`transicion-logo ${zoom ? 'zoom' : ''}`}
      />
    </div>
  );
}
export default TransicionCatalogo;