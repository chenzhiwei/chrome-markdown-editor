# Build

1. Switch to `source` branch and run following commands:

    ```
    export INLINE_RUNTIME_CHUNK=false
    npm run build
    ```

2. Switch to `master` branch and run following commands:

    ```
    cp -r chrome-extension-static/icons/* build/icons/
    cp -r chrome-extension-static/{manifest.json,worker.js} build/
    ```

3. Remove the service worker registration:

    ```
    vim build/static/js/main.a9d69fdd.chunk.js
    clear the function T(e, t){}
    ```

4. Update CSS styles

    ```
    vim build/static/css/main.6a18af69.chunk.css
    #root,body,html{height:100%;font-size:100%;}
    ```

5. The `build` directory is the extension directory
