<template>
  <ion-page>
    <ion-header translucent="true">
      <ion-toolbar>
        <ion-title> Inicio de Sesion </ion-title>
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
                    <h2>Inicio de Sesion</h2>
                  </ion-label>
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-item>
                    <ion-label position="floating">
                      Correo Electronico
                    </ion-label>
                    <ion-input type="email" v-model="Correo"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating"> Contraseña </ion-label>
                    <ion-input
                      type="contraseña"
                      v-model="Contraseña"
                    ></ion-input>
                  </ion-item>
                </ion-list>
                <ion-button expand="block" @click="Iniciar">
                  Ingresar
                </ion-button>
                <ion-button expand="block" @click="Registro">
                  Ir a Registro
                </ion-button>
              </ion-card-content>
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

  methods: {
    Registro() {
      router.push("/Registro");
    },
    Iniciar() {
      router.push("/Home");
    },
  },
});
</script>

<style>
</style>