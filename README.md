<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>IQ200 - Olympiad Prep & IQ Evaluation Core</title>
    <script>
      (function() {
        var handler = function(msg) {
          if (msg === 'Script error.' || (typeof msg === 'string' && msg.indexOf('Script error') !== -1)) {
            console.warn('[IQ200-EARLY] Suppressed early third-party Script error.');
            return true;
          }
          return false;
        };
        window.onerror = function(message) {
          if (handler(message)) return true;
        };
        window.addEventListener('error', function(e) {
          if (handler(e.message)) {
            e.preventDefault();
            e.stopPropagation();
          }
        }, true);
        window.addEventListener('unhandledrejection', function(e) {
          if (e.reason && handler(e.reason.message)) {
            e.preventDefault();
          }
        });
      })();
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

