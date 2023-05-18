import { CollectionReference, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

export const users: CollectionReference = collection(db, 'users');
