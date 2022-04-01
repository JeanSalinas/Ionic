<template>
  <ion-page>
    <ion-header translucent="true">
      <ion-toolbar>
        <!-- <ion-title>
                  Registro
              </ion-title> -->
        <ion-title> Registrate aquí </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  <ion-label>
                    <center>
                      <!-- <h2>
                        Registrate Aqui
                      </h2> -->
                      <img class="use" src="../images/user.png" />
                    </center>
                    <ion-list>
                      <ion-item>
                        <ion-label position="floating"> Nombre de Usuario </ion-label>
                        <ion-input type="text" v-model="Nombre"></ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label position="floating"> Apellido </ion-label>
                        <ion-input type="text" v-model="Apellido"></ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label position="floating"> Correo Electronico </ion-label>
                        <ion-input type="email" v-model="Correo" placeholder=""></ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label position="floating"> Contraseña </ion-label>
                        <ion-input type="password" v-model="Contraseña"></ion-input>
                      </ion-item>
                    </ion-list>
                    <!-- <ion-button expand="block" @click="Registrar">
                      Registrar
                    </ion-button> -->
                    <ion-button expand="block" @click="comparador">
                      Registrar
                    </ion-button>
                    <ion-button expand="block" @click="Iniciar">
                      Ir a inicio de sesión
                    </ion-button>
                    {{ err }}
                    {{ eme }}
                  </ion-label>
                </ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
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
  IonCardTitle,
  IonCardHeader,
  IonItem,
  IonList,
  IonButton,
  //IonCardContent,
  IonCard,
  IonCol,
  IonRow,
  IonGrid,
  IonInput,
} from "@ionic/vue";
import { defineComponent } from "vue";
import router from "@/router";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  QuerySnapshot,
} from "@firebase/firestore/lite";
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
    IonCardTitle,
    IonCardHeader,
    IonItem,
    IonList,
    IonButton,
    //IonCardContent,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    IonInput,
  },

  data() {
    return {
      Nombre: "",
      Apellido: "",
      Correo: "",
      Contraseña: "",
      err:"",
      eme:"",
    };
  },

  methods: {
    Iniciar() {
      router.push("/Inicio");
    },
    async Registrar() {
      const db = getFirestore(app);
      if (
        this.Nombre.length > 0 &&
        this.Apellido.length > 0 &&
        this.Correo.length > 0 &&
        this.Contraseña.length > 0
      ) {
        setDoc(doc(db, "registros", this.Nombre), 
        {
          usuario: this.Nombre,
          apellido: this.Apellido,
          correo: this.Correo,
          contraseña: sha256.sha256(this.Contraseña),
        });
        this.Nombre = "";
        this.Apellido = "";
        this.Correo = "";
        this.Contraseña = "";
      }
      
    },
    async comparador(){
      const db =getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "registros"))
      querySnapshot.forEach(doc => {
        if(doc.data().Correo==this.Correo){
          console.log("Este correo ya existe")
        }else if(doc.id==this.Nombre){
          console.log("Este nombre de usuario ya existe")
        }else{
          this.Registrar()
          router.push("/Inicio");
        }
      })
    },
  },
});
</script>

<style>
.use {
  width: 250px;
  height: 200px;
}
</style>