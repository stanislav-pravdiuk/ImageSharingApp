    // Для роботи із firebase обовʼязково треба ініціалізувати проект
    import { initializeApp } from 'firebase/app';
    // Функція для підключення авторизації в проект
    import { getAuth } from 'firebase/auth';
    // Функція для підключення бази даних у проект
    import { getFirestore } from 'firebase/firestore';
    // Функція для підключення сховища файлів в проект
    import { getStorage } from 'firebase/storage';

    const firebaseConfig = {
        apiKey: "AIzaSyCTDGKD15XYkVNRyzvpj5FpgppFR5FTqSg",
        authDomain: "test-d7d91.firebaseapp.com",
        projectId: "test-d7d91",
        storageBucket: "test-d7d91.appspot.com",
        messagingSenderId: "490749081610",
        appId: "1:490749081610:web:b7228a8e97ce3598c147f3",
        measurementId: "G-JMT02ETM14"
    };

    const app = initializeApp(firebaseConfig);

    export const auth = getAuth(app);
    export const db = getFirestore(app);
    export const storage = getStorage(app);