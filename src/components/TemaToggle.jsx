import { useEffect, useState } from 'react';

// Botón para cambiar entre modo claro y oscuro
export default function TemaToggle() {
  const [oscuro, setOscuro] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', oscuro);
  }, [oscuro]);

  return (
    <button
      type="button"
      onClick={() => setOscuro(!oscuro)}
      className="rounded-lg p-2 text-xl hover:bg-white/10"
      aria-label="Cambiar tema"
    >
      {oscuro ? '☀️' : '🌙'}
    </button>
  );
}
