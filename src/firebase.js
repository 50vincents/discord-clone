const firebaseConfig = {
  apiKey: "AIzaSyCnHxAb43-_9UBtrniVwptnHeecjofwK4k",
  authDomain: "discord-app-b3274.firebaseapp.com",
  databaseURL: "https://discord-app-b3274.firebaseio.com",
  projectId: "discord-app-b3274",
  storageBucket: "discord-app-b3274.appspot.com",
  messagingSenderId: "556525015352",
  appId: "1:556525015352:web:39217c3387944bec17f1cd",
  measurementId: "G-ENXGYW9CEW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }; 
export default db;