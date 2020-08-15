import firebase from 'firebase'
import 'firebase/app'
import 'firebase/database'
import 'firebase/analytics'
import 'firebase/auth'


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
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics();
}

export default firebase;


/* ANOTAÇÕES */ 
 //  ======= ESTADOS DA DATABASE =======
    // this.state ={
    //   nomeInput: '',
    //   idadeInput: '',
    //   token: 'Carregando...',
    //   nome: '',
    //   idade: ''
    // };

    // this.cadastrar = this.cadastrar.bind(this);


   

  // // =========== Fazendo uma requisição de token ========
  // // metódo on: tipo um olheiro: verifica td hora
  // firebase.database().ref('token').on('value', (snapshot) => {
  //   let state = this.state;
  //   state.token = snapshot.val();
  //   this.setState(state);
  // });

  //====================== metódo once: verifica só uma vez ===========
  // firebase.database().ref('token').on('value', (snapshot) => {
  //   let state = this.state;
  //   state.token = snapshot.val();
  //   this.setState(state);
  // });

  // // =========== Fazendo uma requisição para o nome e idade 01 ==========
  // firebase.database().ref('usuarios').child(1).on('value', (snapshot) => {
  //   let state = this.state;
  //   state.nome = snapshot.val().nome;
  //   state.idade = snapshot.val().idade;
  //   this.setState(state);
  // });

  // ========= FUNCAO DE CONTROLE ========
  // cadastrar(e){
    // Inserir um novo dado 
    // firebase.database().ref('token').set(this.state.tokenInput);
    // Insere um dado na 1 -> idade
    // firebase.database().ref('usuarios').child(1).child('idade').set(this.state.tokenInput);
    // ADICIONANDO NOVO CAMPO NO BANCO DE DADOS
    // firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.tokenInput)
    // REMOVENDO UM CAMPO NO BANCO DE DADOS
    // firebase.database().ref('usuarios').child(1).child('cargo').remove();
    
    // ====== MUDA NOME E IDADE ====
  //   let usuarios = firebase.database().ref('usuarios');
  //   let chave = usuarios.push().key;
  //   usuarios.child(chave).set({
  //     nome: this.state.nomeInput,
  //     idade: this.state.idade
  //   })
  //   e.preventDefault()
  // }


  /* no render(){ return(*/ 
    // Desconstruindo 
    // const { token, nome, idade } = this.state;
    {/* ============= FORMULARIO EXEMPLO DATABASE =============
        <form onSubmit={this.cadastrar}>
          <input type="text" value={this.state.nomeInput}
          onChange={(e) => this.setState({nomeInput: e.target.value})}/><br/>
           <input type="text" value={this.state.idadeInput}
          onChange={(e) => this.setState({idadeInput: e.target.value})}/><br/>
        <button type="subimit">Cadastrar</button>
        </form>
        =========== VER DATABASE ========= 
        <h1>Token: {token}</h1>
        <h1>Nome: {nome}</h1>
        <h1>Idade: {idade}</h1> */}

  // ========== BUSCAR DADOS DO BANCO =====
  // firebase.database().ref('usuarios').on('value',(snapshot) => {
  //   let state = this.state;
  //   state.lista = [];
//   snapshot.forEach((childItem) => {
//     state.lista.push({
//       key: childItem.key,
//       nome: childItem.val().nome,
//       idade: childItem.val().idade,
//     })
//   });
//   this.setState(state);
// });

// RENDER
// {this.state.lista.map((item) => {
//   return(
//     <div>
//       <h1>olá {item.nome}</h1>
//       <h2>Idade: {item.idade} anos</h2>
//     </div>
//   );
    
// })}


 // CADASTRANDO USUARIO E SENHA
//  firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
//  .catch((error) =>{
//    if(error.code === 'auth/invalid-email'){
//      alert('Email invalido!');
//    }
//    if(error.code === 'auth/weak-password'){
//      alert('Senha Fraca!');
//    }else{
//      alert('Codigo de error: ' + error.code)
//    }
//  })

//  e.preventDefault();
// }

// render() {
//  return (
//    <div>
//      <form onSubmit={this.cadastrar}>

//        <label>Email:</label><br />
//        <input type="text" value={this.state.email}
//          onChange={(e) => this.setState({ email: e.target.value })} /><br />

//        <label>Senha:</label><br />
//        <input type="text" value={this.state.senha}
//          onChange={(e) => this.setState({ senha: e.target.value })} /><br />

//        <button type="submit">Cadastrar</button>

//      </form>
//    </div>

 /* ============ LOGA E SAI ================*/ 
//  this.logar = this.logar.bind(this);
//  this.sair = this.sair.bind(this);

//  firebase.auth().onAuthStateChanged((user)=>{
//    if(user){
//      alert('Usuario Logado com sucesso! \n Email: ' + user.email);
//    }
//  })

// }

// logar(e){

//  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
//  .catch((error) =>{
//    if(error.code === 'auth/wrong-password'){
//      alert('Senha incorreta!');
//    }else{
//      alert('Codigo de error: ' + error.code);
//    }
//  })

//  e.preventDefault();
// }

// sair(){

//  firebase.auth().signOut();
//  alert('Deslogado com sucesso!');
// }



// render(){

//  return(
//    <div> 
//      <h1>Entrar</h1>
//      <form onSubmit={this.logar}>

//        <label>Email:</label><br/>
//        <input type="text" value={this.state.email} 
//               onChange={(e) => this.setState({email: e.target.value})}/><br/>

//        <label>Senha:</label><br/>
//        <input type="text" value={this.state.senha} 
//               onChange={(e) => this.setState({senha: e.target.value})}/><br/>

//        <button type="submit">Entrar</button>                 

//      </form>

//      <br/>
//      <button onClick={this.sair}>Sair</button>

//    </div>
//  );
// }
// }