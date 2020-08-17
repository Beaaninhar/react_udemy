import app from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyC3czIPhfrj9Prj13EjPQSuISa_VgjM48U",
  authDomain: "reactapp-a4bff.firebaseapp.com",
  databaseURL: "https://reactapp-a4bff.firebaseio.com",
  projectId: "reactapp-a4bff",
  storageBucket: "reactapp-a4bff.appspot.com",
  messagingSenderId: "259573673167",
  appId: "1:259573673167:web:8fece009581819ab845bba",
  measurementId: "G-HYTEF8TMT4"
};



class Firebase {
  constructor() {
    // Initialize Firebase
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig)
      app.analytics();
    }

    /* Metódo que referencia o database para acessar em outros locais */ 
    this.app = app.database();
    this.storage = app.storage();
  }

  logout(){
    return app.auth().signOut();
  }

  async register(nome, email, password){
    await app.auth().createUserWithEmailAndPassword(email, password)

    const uid = app.auth().currentUser.uid;

    return app.database().ref('usuarios').child(uid).set({
      nome: nome
    })

  }

  isInitialized(){
      return new Promise(resolve =>{
          app.auth().onAuthStateChanged(resolve);
      })
  }

  getCurrent(){
    return app.auth().currentUser && app.auth().currentUser.email
  }

  getCurrentUid(){
    return app.auth().currentUser && app.auth().currentUser.uid
  }

  async getUserName(callback){
    if(!app.auth().currentUser){
      return null;
    }

    const uid = app.auth().currentUser.uid;
    await app.database().ref('usuarios').child(uid)
    .once('value').then(callback);

  }

}

export default new Firebase();