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
import { onChildAdded, onChildChanged, onChildMoved, onChildRemoved, onValue } from 'firebase/database';
export type Query = import('firebase/database').Query;
export declare enum ListenEvent {
    added = "child_added",
    removed = "child_removed",
    changed = "child_changed",
    moved = "child_moved",
    value = "value"
}
export interface QueryChange {
    snapshot: import('firebase/database').DataSnapshot;
    prevKey: string | null | undefined;
    event: ListenEvent;
}
export declare const ListenerMethods: Readonly<{
    child_added: typeof onChildAdded;
    child_removed: typeof onChildRemoved;
    child_changed: typeof onChildChanged;
    child_moved: typeof onChildMoved;
    value: typeof onValue;
}>;
