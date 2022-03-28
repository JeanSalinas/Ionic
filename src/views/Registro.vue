<template>
  <ion-page>
      <ion-header translucent="true">
          <ion-toolbar>
              <ion-title>
                  Registro
              </ion-title>
          </ion-toolbar>
      </ion-header>
      <ion-content fullscreen="true">
        <h2>
            Registrate Aqui
        </h2>
        <ion-list>
        <ion-item>
           <ion-label position="floating">
                Nombre
            </ion-label>
            <ion-input type="text" v-model="Nombre"></ion-input>
            <ion-label position="floating">
                Correo Electronico
            </ion-label>
            <ion-input type="email" v-model="Correo"></ion-input>
        </ion-item>
        <ion-item>
            <ion-label position="floating">
                Contraseña
            </ion-label>
            <ion-input type="password" v-model="Contraseña"></ion-input>
        </ion-item>
        </ion-list>
        <ion-button expand="block" @click="Registrar">
            Registrar
        </ion-button>
        <ion-button expand="block" @click="Iniciar">
            Ir a inicio de sesion
        </ion-button>
      </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  //IonCardTitle,
  //IonCardHeader,
  IonItem,
  IonList,
  IonButton,
  //IonCardContent,
  //IonCard,
  //IonCol,
  //IonRow,
  //IonGrid,
  IonInput,
} from "@ionic/vue";
import { defineComponent } from "vue";
import router from "@/router";
import { getFirestore,collection,getDocs,doc,setDoc,getDoc,QuerySnapshot } from "@firebase/firestore/lite";
import app from "@/firebase/conection";
import sha256 from "js-sha256";
export default defineComponent({
  name: "InicioApp",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    //IonCardTitle,
    //IonCardHeader,
    IonItem,
    IonList,
    IonButton,
    //IonCardContent,
    //IonCard,
    //IonCol,
    //IonRow,
    //IonGrid,
    IonInput,
  },

  data(){
    return{
      Nombre:"",
      Correo:"",
      Contraseña:"",
    }
  },

  methods:{
      Iniciar(){
          router.push('/Inicio')
      },
     async Registrar(){
        const db=getFirestore(app)
        if(this.Nombre.length>0 && this.Correo.length>0 && this.Contraseña.length>0){
          setDoc(doc(db,"registros", this.Nombre),{
            usuario: this.Nombre, 
            correo:this.Correo, 
            contraseña:sha256.sha256(this.Contraseña),
            });
          this.Nombre="";
          this.Correo="";
          this.Contraseña="";
        }
      }
  }
});
</script>

<style>

</style>