import firebase from "firebase";



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCv2lQTEmu_YgaT-OFjkdBiWPbiUuSwiA8",
    authDomain: "product-shop-d2ebc.firebaseapp.com",
    databaseURL: "https://product-shop-d2ebc-default-rtdb.firebaseio.com"
})

export default firebaseApp;