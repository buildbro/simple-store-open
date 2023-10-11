import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, getDoc, onSnapshot, doc, Timestamp, deleteDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';

import { onUnmounted, ref as vueRef } from 'vue';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_S_BUCKET,
    messagingSenderId: import.meta.env.VITE_M_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID

};

const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);
const inventoryCollection = collection(db, "inventory");
const ordersCollection = collection(db, "orders");

const storage = getStorage(firebaseApp);

const auth = getAuth(firebaseApp);

export const currentUser = () => {
    return auth.currentUser;
}

export const createUser = async (user) => {
    user.created_at = Timestamp.now();
    const newUser = await createUserWithEmailAndPassword(auth, user.email, user.password);
    return newUser;
}

export const userLogin = async (user) => {
    const loggedInUser = await signInWithEmailAndPassword(auth, user.email, user.password);
    return loggedInUser;
}

export const logout = async () => {
    const endedSession = await signOut(auth);
    return endedSession;
}

export const createItem = async (item) => {
    item.created_at = Timestamp.now();
    item.created_by = auth.currentUser.email;
    const newItem = await addDoc(inventoryCollection, item);
    return newItem;
}

export const loadInventory = async () => {
    const items = vueRef([]);

    const unsubscribe = onSnapshot(inventoryCollection, (snapShot) => {
        items.value = snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });

    onUnmounted(unsubscribe);

    return items;
}

export const getSingleItem = async (itemId) => {
    const docRef = doc(db, "inventory", itemId);
    const item = await getDoc(docRef);
    return item.exists ? item.data() : null;
}

export const createOrder = (order) => {
    order.created_at = Timestamp.now();
    order.created_by = auth.currentUser.email;
    const newOrder = addDoc(ordersCollection, order);
    return newOrder;
}

export const uploadFile = async file => {

    let saveData;

    const currentDate = new Date();
    const currentTime = currentDate.getTime();

    const extArr = file.name.split(".");
    const extension = extArr[extArr.length - 1];

    const file_ref = ref(storage, currentTime + "." + extension);

    saveData = await uploadBytes(file_ref, file).then((snapShot) => {
        return getDownloadURL(snapShot.ref)
    });

    return saveData;

}

export const adminLoadInventory = async () => {
    const items = vueRef([]);
    const unsubscribe = onSnapshot(inventoryCollection, (snapShot) => {
        items.value = snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });

    onUnmounted(unsubscribe);

    return items;
}

export const deleteItem = async (id) => {
    const deleteItem = await deleteDoc(doc(db, "inventory", id));
    return deleteItem;
}

