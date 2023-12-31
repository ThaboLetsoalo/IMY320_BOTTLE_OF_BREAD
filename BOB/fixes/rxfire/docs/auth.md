# RxFire Auth

## Auth State Observables

### `authState()`
The `authState()` function creates an observable that emits authentication changes such as a logged out or logged in state.

|                 |                                             |
|-----------------|---------------------------------------------|
| **function**    | `authState()`                               |
| **params**      | `import('firebase/auth').Auth`              |
| **import path** | `rxfire/auth`                               |
| **return**      | `Observable<import('firebase/auth').User>`  |

#### TypeScript Example
```ts
import { authState } from 'rxfire/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { filter } from 'rxjs/operators';

// Set up Firebase
const app = initializeApp({ /* config */ });
const auth = getAuth();
authState(auth).subscribe(user => {
  console.log(user, ' will be null if logged out');
});

// Listen only for logged in state
const loggedIn$ = authState(auth).pipe(filter(user => !!user));
loggedIn$.subscribe(user => { console.log(user); });
```

### `user()`
The `user()` function creates an observable that emits authentication changes such as a logged out, logged in, and token refresh state. The token refresh emissions is what makes `user()` different from `authState()`.

|                 |                                             |
|-----------------|---------------------------------------------|
| **function**    | `user()`                                    |
| **params**      | `import('firebase/auth').Auth`              |
| **import path** | `rxfire/auth`                               |
| **return**      | `Observable<import('firebase/auth').User>`  |

#### TypeScript Example
```ts
import { user } from 'rxfire/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { filter } from 'rxjs/operators';

// Set up Firebase
const app = initializeApp({ /* config */ });
const auth = getAuth();
user(auth).subscribe(u => { console.log(u); );
```

### `idToken()`
The `idToken()` function creates an observable that emits the `idToken` refreshes. This is useful for keeping third party authentication in sync with Firebase Auth refreshes.

|                 |                                          |
|-----------------|------------------------------------------|
| **function**    | `idToken()`                              |
| **params**      | `import('firebase/auth').Auth`           |
| **import path** | `rxfire/auth`                            |
| **return**      | `Observable<string\|null>`               |

#### TypeScript Example
```ts
import { idToken } from 'rxfire/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { filter } from 'rxjs/operators';

// Set up Firebase
const app = initializeApp({ /* config */ });
const auth = getAuth();
idToken(auth).subscribe(token => { console.log(token); );
```
