<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Bienvenidos a Rest</ion-title>
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
                      <!-- <center>
                        <img class="res" src="../images/rest.png" />
                      </center>  -->
                      <ion-list>
                      <ion-item>
                        <ion-label position="floating"> ID </ion-label>
                        <ion-input type="text" v-model="ID" placeholder="ID"></ion-input>
                      </ion-item>
                      <ion-button expand="block" @click="Get">
                          Get
                        </ion-button>
                        <ion-button expand="block" @click="Post">
                          Post
                        </ion-button>
                      <ion-item>
                        <ion-label position="floating"> Temperatura </ion-label>
                        <ion-input type="text" v-model="Temperatura" placeholder="Temperatura"></ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label position="floating"> Altitud </ion-label>
                        <ion-input type="text" v-model="Altitud" placeholder="Altitud"></ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label position="floating"> Humedad </ion-label>
                        <ion-input type="text" v-model="Humedad" placeholder="Humedad"></ion-input>
                      </ion-item>
                    </ion-list>
                      <p>
                        <ion-button expand="block" @click="Inicio">
                          Volver a la Pagina Principal
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
    
    Inicio(){
        router.push("/Home");
    },
    Login() {
      router.push("/Inicio");
    },
    Register() {
      router.push("/Registro");
    },
    Gps() {
      router.push("/ubicacion");
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
/* .res {
  width: 200px;
  height: 150px;
} */
</style>  