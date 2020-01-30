/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->

    <script>
        // Your web app's Firebase configuration
        var firebaseConfig = {
        apiKey: "AIzaSyBC5Va5kxIBJSDO2G6XNKxhnP38_VJ_yeI",
        authDomain: "social-coffee.firebaseapp.com",
        databaseURL: "https://social-coffee.firebaseio.com",
        projectId: "social-coffee",
        storageBucket: "social-coffee.appspot.com",
        messagingSenderId: "419956585048",
        appId: "1:419956585048:web:ef289b73271f945728502d"
    };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    </script>

*/

import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyBC5Va5kxIBJSDO2G6XNKxhnP38_VJ_yeI",
    authDomain: "social-coffee.firebaseapp.com",
    databaseURL: "https://social-coffee.firebaseio.com",
    projectId: "social-coffee",
    storageBucket: "social-coffee.appspot.com",
    messagingSenderId: "419956585048",
    appId: "1:419956585048:web:ef289b73271f945728502d"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}
export default Firebase;
