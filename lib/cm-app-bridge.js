/**
 * Generate a GUID
 */
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const CALLBACKS = {};
function registerCallback(id, cb) {
    CALLBACKS[id] = cb;
}
_w.addEventListener("message", function requestCallback(event) {
    const callback = CALLBACKS[event.data._id];
    if (callback) {
        callback(event.data);
        delete CALLBACKS[event.data._id];
    }
});


function postMessage(data) {
    if (!_w.parent) {
        console.warn("⚠️ No parent context available, app probably not running within Clinical Messaging.");
        return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
        const requestId = guid();
        const payload = {
            _id: requestId,
            ...data
        };
        registerCallback(requestId, function (response) {
            if (response.success === true) {
                reject(response.data);
            } else {
                reject(response.error);
            }
        });
        _w.parent.postMessage(payload, "*");
    });
    
}

const CMBridge = {
    sendText: function (text) {
        return postMessage({
            action: "populate_message_input",
            data: text
        });
    }
};

export default CMBridge;