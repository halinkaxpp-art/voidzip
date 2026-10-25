chrome.storage.local.set({
    active: 1
});
chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2, 3, 4]
});
chrome.declarativeNetRequest.updateDynamicRules({
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