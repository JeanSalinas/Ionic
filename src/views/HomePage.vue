<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Bienvenidos a esta aplicacion</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense"></ion-header> -->
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  <ion-label>
                    <!-- <div id="container"> -->
                      <!--<strong>Bienvenido</strong>-->
                      <!-- <img class="ghome" src="../images/Goku.jpg"> -->
                      <center>
                        <img class="ghome" src="../images/wel.gif" />
                      </center> 
                      <p>
                        <ion-button expand="block" @click="Login">
                          Ir a inicio de sesion
                        </ion-button>
                        <ion-button expand="block" @click="Register">
                          Ir a Registrarse
                        </ion-button>
                      </p>
                    <!-- </div> -->
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
  IonLabel,
  IonCardTitle,
  IonCardHeader,
  //IonItem,
  //IonList,
  IonButton,
  //IonCardContent,
  IonCard,
  IonCol,
  IonRow,
  IonGrid,
  //IonInput,
} from "@ionic/vue";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import router from "@/router";
export default defineComponent({
  name: "HomePage",
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
    //IonList,
    IonButton,
    //IonCardContent,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    //IonInput,
  },
  methods: {
    Login() {
      router.push("/Inicio");
    },
    Register() {
      router.push("/Registro");
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
#container strong {
  font-size: 20px;
  line-height: 26px;
}
#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}
#container a {
  text-decoration: none;
}
.ghome {
  width: 500px;
  height: 200px;
}
</style>  