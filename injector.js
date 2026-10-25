(function () {
    try {
        if (document.defaultView.location.href.includes("starve.io")) {
            document.defaultView.chrome.storage.local.get("active", (storage) => {
                if (storage.active == 1) {
                    console.log("%cVoid Enabled", "color: lime;");

                    const scriptMain = document.createElement("script");
                    scriptMain.src = document.defaultView.chrome.runtime.getURL("loader/polyfill.js");
                    scriptMain.type = "module";
                    document.documentElement.appendChild(scriptMain);

                    const scriptExtra1 = document.createElement("script");
                    scriptExtra1.src = document.defaultView.chrome.runtime.getURL("loader/packages.js");
                    document.documentElement.appendChild(scriptExtra1);

                    const scriptExtra = document.createElement("script");
                    scriptExtra.src = document.defaultView.chrome.runtime.getURL("loader/loader.js");
                    scriptExtra.type = "module";
                    document.documentElement.appendChild(scriptExtra);


                } else if (storage.active == 0) {
                    console.log("%cVoid Disabled", "color: red;");
                } else {
                    document.defaultView.chrome.storage.local.set({ active: 1 });
                    console.log("%cVoid Enabled", "color: lime;");

                    const scriptMain = document.createElement("script");
                    scriptMain.src = document.defaultView.chrome.runtime.getURL("loader/polyfill.js");
                    scriptMain.type = "module";
                    document.documentElement.appendChild(scriptMain);

                    const scriptExtra1 = document.createElement("script");
                    scriptExtra1.src = document.defaultView.chrome.runtime.getURL("loader/packages.js");
                    document.documentElement.appendChild(scriptExtra1);


                    const scriptExtra = document.createElement("script");
                    scriptExtra.src = document.defaultView.chrome.runtime.getURL("loader/loader.js");
                    scriptExtra.type = "module";
                    document.documentElement.appendChild(scriptExtra);
                }
            });
        }
    } catch { }
})();
