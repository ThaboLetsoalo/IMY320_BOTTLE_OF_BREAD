'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rxjs = require('rxjs');
var operators = require('rxjs/operators');
var database = require('firebase/database');

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
exports.ListenEvent = void 0;
(function (ListenEvent) {
    ListenEvent["added"] = "child_added";
    ListenEvent["removed"] = "child_removed";
    ListenEvent["changed"] = "child_changed";
    ListenEvent["moved"] = "child_moved";
    ListenEvent["value"] = "value";
})(exports.ListenEvent || (exports.ListenEvent = {}));
var ListenerMethods = Object.freeze((_a = {},
    _a[exports.ListenEvent.added] = database.onChildAdded,
    _a[exports.ListenEvent.removed] = database.onChildRemoved,
    _a[exports.ListenEvent.changed] = database.onChildChanged,
    _a[exports.ListenEvent.moved] = database.onChildMoved,
    _a[exports.ListenEvent.value] = database.onValue,
    _a));

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Create an observable from a Database Reference or Database Query.
 * @param ref Database Reference
 * @param event Listen event type ('value', 'added', 'changed', 'removed', 'moved')
 */
function fromRef(ref, event) {
    return new rxjs.Observable(function (subscriber) {
        var fn = ListenerMethods[event](ref, function (snapshot, prevKey) {
            subscriber.next({ snapshot: snapshot, prevKey: prevKey, event: event });
        }, subscriber.error.bind(subscriber));
        return {
            unsubscribe: function () {
                database.off(ref, event, fn);
            },
        };
    }).pipe(
    // Ensures subscribe on observable is async. This handles
    // a quirk in the SDK where on/once callbacks can happen
    // synchronously.
    operators.delay(0));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check the length of the provided array. If it is empty return an array
 * that is populated with all the Realtime Database child events.
 * @param events
 */
function validateEventsArray(events) {
    if (events == null || events.length === 0) {
        events = [
            exports.ListenEvent.added,
            exports.ListenEvent.removed,
            exports.ListenEvent.changed,
            exports.ListenEvent.moved,
        ];
    }
    return events;
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Get the snapshot changes of an object
 * @param query
 */
function object(query) {
    return fromRef(query, exports.ListenEvent.value);
}
/**
 * Get an array of object values, optionally with a mapped key
 * @param query object ref or query
 * @param keyField map the object key to a specific field
 */
function objectVal(query, options) {
    if (options === void 0) { options = {}; }
    return fromRef(query, exports.ListenEvent.value).pipe(operators.map(function (change) { return changeToData(change, options); }));
}
function changeToData(change, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var val = change.snapshot.val();
    // match the behavior of the JS SDK when the snapshot doesn't exist
    if (!change.snapshot.exists()) {
        return val;
    }
    // val can be a primitive type
    if (typeof val !== 'object') {
        return val;
    }
    return __assign(__assign({}, val), (options.keyField ? (_a = {}, _a[options.keyField] = change.snapshot.key, _a) : null));
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function stateChanges(query, options) {
    if (options === void 0) { options = {}; }
    var events = validateEventsArray(options.events);
    var childEvent$ = events.map(function (event) { return fromRef(query, event); });
    return rxjs.merge.apply(void 0, childEvent$);
}
function get(query) {
    return rxjs.from(database.get(query)).pipe(operators.map(function (snapshot) {
        var event = exports.ListenEvent.value;
        return { snapshot: snapshot, prevKey: null, event: event };
    }));
}
function list(query, options) {
    if (options === void 0) { options = {}; }
    var events = validateEventsArray(options.events);
    return get(query).pipe(operators.switchMap(function (change) {
        var childEvent$ = [rxjs.of(change)];
        events.forEach(function (event) {
            childEvent$.push(fromRef(query, event));
        });
        return rxjs.merge.apply(void 0, childEvent$).pipe(operators.scan(buildView, []));
    }), operators.distinctUntilChanged());
}
/**
 * Get an object mapped to its value, and optionally its key
 * @param query object ref or query
 * @param keyField map the object key to a specific field
 */
function listVal(query, options) {
    if (options === void 0) { options = {}; }
    return list(query).pipe(operators.map(function (arr) {
        return arr.map(function (change) { return changeToData(change, options); });
    }));
}
function positionFor(changes, key) {
    var len = changes.length;
    for (var i = 0; i < len; i++) {
        if (changes[i].snapshot.key === key) {
            return i;
        }
    }
    return -1;
}
function positionAfter(changes, prevKey) {
    if (prevKey == null) {
        return 0;
    }
    else {
        var i = positionFor(changes, prevKey);
        if (i === -1) {
            return changes.length;
        }
        else {
            return i + 1;
        }
    }
}
function buildView(current, change) {
    var snapshot = change.snapshot, prevKey = change.prevKey, event = change.event;
    var key = snapshot.key;
    var currentKeyPosition = positionFor(current, key);
    var afterPreviousKeyPosition = positionAfter(current, prevKey || undefined);
    switch (event) {
        case exports.ListenEvent.value:
            if (change.snapshot && change.snapshot.exists()) {
                var prevKey_1 = null;
                change.snapshot.forEach(function (snapshot) {
                    var action = {
                        snapshot: snapshot,
                        event: exports.ListenEvent.value,
                        prevKey: prevKey_1,
                    };
                    prevKey_1 = snapshot.key;
                    current = __spreadArray(__spreadArray([], current, true), [action], false);
                    return false;
                });
            }
            return current;
        case exports.ListenEvent.added:
            if (currentKeyPosition > -1) {
                // check that the previouskey is what we expect, else reorder
                var previous = current[currentKeyPosition - 1];
                if (((previous && previous.snapshot.key) || null) !== prevKey) {
                    current = current.filter(function (x) { return x.snapshot.key !== snapshot.key; });
                    current.splice(afterPreviousKeyPosition, 0, change);
                }
            }
            else if (prevKey == null) {
                return __spreadArray([change], current, true);
            }
            else {
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, change);
            }
            return current;
        case exports.ListenEvent.removed:
            return current.filter(function (x) { return x.snapshot.key !== snapshot.key; });
        case exports.ListenEvent.changed:
            return current.map(function (x) { return (x.snapshot.key === key ? change : x); });
        case exports.ListenEvent.moved:
            if (currentKeyPosition > -1) {
                var data = current.splice(currentKeyPosition, 1)[0];
                current = current.slice();
                current.splice(afterPreviousKeyPosition, 0, data);
                return current;
            }
            return current;
        // default will also remove null results
        default:
            return current;
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function auditTrail(query, options) {
    if (options === void 0) { options = {}; }
    var auditTrail$ = stateChanges(query, options).pipe(operators.scan(function (current, changes) { return __spreadArray(__spreadArray([], current, true), [changes], false); }, []));
    return waitForLoaded(query, auditTrail$);
}
function loadedData(query) {
    // Create an observable of loaded values to retrieve the
    // known dataset. This will allow us to know what key to
    // emit the "whole" array at when listening for child events.
    return fromRef(query, exports.ListenEvent.value).pipe(operators.map(function (data) {
        // Store the last key in the data set
        var lastKeyToLoad;
        // Loop through loaded dataset to find the last key
        data.snapshot.forEach(function (child) {
            lastKeyToLoad = child.key;
            return false;
        });
        // return data set and the current last key loaded
        return { data: data, lastKeyToLoad: lastKeyToLoad };
    }));
}
function waitForLoaded(query, snap$) {
    var loaded$ = loadedData(query);
    return loaded$.pipe(operators.withLatestFrom(snap$), 
    // Get the latest values from the "loaded" and "child" datasets
    // We can use both datasets to form an array of the latest values.
    operators.map(function (_a) {
        var loaded = _a[0], changes = _a[1];
        // Store the last key in the data set
        var lastKeyToLoad = loaded.lastKeyToLoad;
        // Store all child keys loaded at this point
        var loadedKeys = changes.map(function (change) { return change.snapshot.key; });
        return { changes: changes, lastKeyToLoad: lastKeyToLoad, loadedKeys: loadedKeys };
    }), 
    // This is the magical part, only emit when the last load key
    // in the dataset has been loaded by a child event. At this point
    // we can assume the dataset is "whole".
    operators.skipWhile(function (meta) {
        return meta.loadedKeys.indexOf(meta.lastKeyToLoad) === -1;
    }), 
    // Pluck off the meta data because the user only cares
    // to iterate through the snapshots
    operators.map(function (meta) { return meta.changes; }));
}

exports.ListenerMethods = ListenerMethods;
exports.auditTrail = auditTrail;
exports.changeToData = changeToData;
exports.fromRef = fromRef;
exports.list = list;
exports.listVal = listVal;
exports.object = object;
exports.objectVal = objectVal;
exports.stateChanges = stateChanges;
//# sourceMappingURL=index.cjs.js.map
