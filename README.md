## Folder structure
This project follows a very simple project structure:

* src: This folder is the main container of all the code inside your application.
* assets: Asset folder to store all images, vectors, etc.
* components: Folder to store any common component that you use through your app (such as a generic button)
* layouts: Folder that contains all your application screens/features.
* navigation: Folder to store the navigators.
* state: This folder contains all api with redux-saga and redux related reducers, actions, types.
* ducks: This folder contains all redux related reducers, actions, types.
* actions: This folder contains all actions that can be dispatched to redux and saga.
* reducers: This folder should have all your reducers, and expose the combined result using its index.js
* sagas: This folder contains all api call with redux-saga.

* axios utils, wrapper: This folder contains common config with common axios get, post, put, delete methods
* store: Folder to put all redux middlewares and the store.
* RootConatiner: Entry file with indicator, toastmessage and app code wrapper.
* globals: common globals used strings, views, and utilities.
* theme: Folder to store all the styling concerns related to the application theme.
* utils: File related to common calculation, logics.
* App.js: Main component that starts your whole app.
* index.js: Entry point of your application as per React-Native standards.

## Custom Fonts used inside app

There was no way to download custom fonts from adobe xd so below custom fonts are used inside app

COMFORTAA_REGULAR: 'Comfortaa-Regular',
COMFORTAA_LIGHT: 'Comfortaa-Light',
COMFORTAA_MEDIUM: 'Comfortaa-Medium',
COMFORTAA_BOLD: 'Comfortaa-Bold',
COMFORTAA_SEMIBOLD: 'Comfortaa-SemiBold'

## Generate build apk

Use below 2 commands to genrate android debug build apk

1. "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res",
2. "cd android && ./gradlew assembleDebug && cd .."
