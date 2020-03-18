import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyCTHeEzuwby3SceGDmvC06UFwvvCfIiOQI",
      authDomain: "bookapp-47281.firebaseapp.com",
      databaseURL: "https://bookapp-47281.firebaseio.com",
      projectId: "bookapp-47281",
      storageBucket: "bookapp-47281.appspot.com",
      messagingSenderId: "267684054040",
      appId: "1:267684054040:web:5ea30f44cd51e3e82eef6d",
      measurementId: "G-1WJTPH8LLD"
    };
    firebase.initializeApp(config);
  }
}
