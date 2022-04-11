<template>
  <ion-page>
    <ion-header translucent="true">
      <ion-toolbar>
        <ion-title> Inicio de Sesión </ion-title>
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
                    <!-- <h2>Inicio de Sesion</h2> -->
                     <img class="log" src="../images/logo.png">
                     </center>
                  </ion-label>
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-item>
                    <ion-label position="floating">
                      Correo Electronico
                    </ion-label>
                    <ion-input type="email" v-model="Correo" placeholder="ejemplo@gmail.com"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating"> Contraseña </ion-label>
                    <ion-input type="password" v-model="Contraseña" placeholder="Contraseña"></ion-input>
                  </ion-item>
                </ion-list>
                <ion-button expand="block" @click="Iniciar">
                  Ingresar
                </ion-button>
                <ion-button expand="block" @click="Registro">
                  Ir a Registro
                </ion-button>
              </ion-card-content>
              {{ ContraseñaIncorrecta }}
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
  IonCardContent,
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
    IonCardContent,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    IonInput,
  },
  data(){
    return{
      Nombre: "",
      Apellido: "",
      Correo: "",
      Contraseña: "",
      ContraseñaIncorrecta:"",
    }
  },
  methods: {
    Registro() {
      router.push("/Registro");
    },
    Iniciar() {
      router.push("/Home");
    },
    async Inicio(){
    const db = getFirestore(app);
    const docRef = doc(db, "usuarios", this.Nombre);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const contrasena = docSnap.data();
        const comparar = sha256.sha256(this.Contraseña);
        if (comparar == contrasena.Contraseña) {
          router.push("/Home");
        } else {
          this.ContraseñaIncorrecta = "Datos erroneos";
        }
        //console.log("Document data:", docSnap.data());
      } else {
        this.ContraseñaIncorrecta = "Datos erroneos";
        console.log("No such document!");
      }
    },
  },
});
</script>
<style>
.log{
  width: 150px;
  height: 150px;
}
</style>