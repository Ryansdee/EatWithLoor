if (window.location.pathname.endsWith('.html')) {
    window.history.replaceState({}, document.title, window.location.pathname.slice(0, -5));
  }