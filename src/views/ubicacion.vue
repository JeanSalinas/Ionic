<template>
  <ion-page>
    <ion-header translucent="true">
      <ion-toolbar>
        <!-- <ion-title>
                  Registro
              </ion-title> -->
        <ion-title> Ubicacion </ion-title>
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
                      <img class="use" src="../images/gps.png" />
                    </center>
                    <ion-list>
                      
                    </ion-list>
                    <!-- <ion-button expand="block" @click="Registrar">
                      Registrar
                    </ion-button> -->
                    <h1>Latitud: {{latitud}}</h1>
                    <h1>Longitud: {{longitud}}</h1>
                    <ion-button expand="block" @click="ubicacion">
                      Mi Ubicacion
                    </ion-button>
                    <ion-button expand="block" @click="Inicio">
                          Volver a la Pagina Principal
                    </ion-button>
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
  //IonItem,
  IonList,
  IonButton,
  //IonCardContent,
  IonCard,
  IonCol,
  IonRow,
  IonGrid,
  //IonInput,
} from "@ionic/vue";
import { defineComponent } from "vue";
import router from "@/router";
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
    //IonItem,
    IonList,
    IonButton,
    //IonCardContent,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    //IonInput,
  },
  data() {
    return {
      latitud: NaN,
      longitud: NaN
    };
  },
  methods: {
    Inicio(){
        router.push("/Home");
    },
    ubicacion(){
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((position)=>{
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
         });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
 
  }
    },
})
</script>

<style>
.use {
  width: 100px;
  height: 90px;
}
</style>