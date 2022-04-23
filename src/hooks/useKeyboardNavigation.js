import { useEffect } from 'react';

export default function useKeyboardNavigation() {
  useEffect(() => {
    const keyboardFocusedClassName = 'navigation-with-keyboard';

    function handleOutlineStyles(e) {
      if (e.type === 'keydown' && e.key === 'Tab') {
        document.body.classList.add(keyboardFocusedClassName);
      }

      if (e.type === 'mousedown') {
        document.body.classList.remove(keyboardFocusedClassName);
      }
    }

    document.addEventListener('keydown', handleOutlineStyles);
    document.addEventListener('mousedown', handleOutlineStyles);

    return () => {
      document.body.classList.remove(keyboardFocusedClassName);
      document.removeEventListener('keydown', handleOutlineStyles);
      document.removeEventListener('mousedown', handleOutlineStyles);
    };
  }, []);
}
