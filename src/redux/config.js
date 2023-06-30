// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAx7BLeXj4T9gMspzeOlsYiQ5EB1FChpkU",
    authDomain: "app-on-react-native.firebaseapp.com",
    databaseURL: "https://app-on-react-native-default-rtdb.firebaseio.com",
    projectId: "app-on-react-native",
    storageBucket: "app-on-react-native.appspot.com",
    messagingSenderId: "557553139485",
    appId: "1:557553139485:web:50ead7408c102904aa6bf4",
    measurementId: "G-NEH1780W72"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);