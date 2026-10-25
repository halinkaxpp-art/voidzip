(function () {
    try {
        document.defaultView.Object.defineProperty(document.defaultView.JSON, "canParse", {
            value: document.defaultView.webkitURL.canParse,
            writable: 0,
            configurable: 0,
            enumerable: 0
        });
        document.defaultView.Reflect.deleteProperty(document.defaultView.JSON, "isRawJSON");
        document.defaultView.inner = document.defaultView;
    } catch { };
})();