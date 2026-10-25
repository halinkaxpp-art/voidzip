const toggleInput = document.querySelector(".switch input");
function loadState() {
    const isActive = JSON.parse(document.defaultView.localStorage.getItem("active")) ?? true;
    toggleInput.checked = isActive;
};
async function onToggleChange() {
    const isActive = toggleInput.checked;
    document.defaultView.localStorage.setItem("active", JSON.stringify(isActive));
    document.defaultView.chrome.storage.local.set({
        active: isActive
    });
    if (!isActive) {
        document.defaultView.chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: [1, 2, 3, 4]
        });
    } else {
        document.defaultView.chrome.declarativeNetRequest.updateDynamicRules({
            addRules: [{
                id: 1,
                priority: 2,
                action: {
                    type: "allow"
                },
                condition: {
                    urlFilter: "token.js",
                    resourceTypes: ["script"]
                }
            }, {
                id: 2,
                priority: 2,
                action: {
                    type: "allow"
                },
                condition: {
                    urlFilter: "howler.js",
                    resourceTypes: ["script"]
                }
            }, {
                id: 3,
                priority: 2,
                action: {
                    type: "allow"
                },
                condition: {
                    urlFilter: "jquery.js",
                    resourceTypes: ["script"]
                }
            }, {
                id: 4,
                priority: 1,
                action: {
                    type: "block"
                },
                condition: {
                    urlFilter: ".js?v=",
                    resourceTypes: ["script"]
                }
            }]
        });
    };
};
toggleInput.addEventListener("change", onToggleChange);
loadState();