import { useEffect } from 'react';

export function useJqueryScript(scriptUrl) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpia el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, [scriptUrl]);
}