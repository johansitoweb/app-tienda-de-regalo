import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonItem,
  IonAvatar,
  IonLabel,
  IonText,
  IonMenuToggle,
  IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  add,
  arrowBackOutline,
  bagHandle,
  bagHandleOutline,
  bagHandleSharp,
  documentLockOutline,
  documentLockSharp,
  homeOutline,
  homeSharp,
  informationCircleOutline,
  informationCircleSharp,
  keyOutline,
  keySharp,
  locationOutline,
  locationSharp,
  logOutOutline,
  logOutSharp,
  personOutline,
  personSharp,
  remove,
  star,
  ticketOutline,
  trashOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonIcon, 
    IonContent,
    IonText,
    IonLabel,
    IonAvatar,
    IonItem,
    IonHeader,
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonMenuToggle,
    NgClass,
  ],
})
export class AppComponent {
  profile = {
    name: 'Nikki Thakur',
    email: 'nikki786@gmail.com',
  };

  pages = [
    { title: 'Home', url: '/home', icon: 'home', active: true },
    { title: 'Profile', url: '/profile', icon: 'person', active: false },
    { title: 'Orders', url: '/orders', icon: 'bag-handle', active: false },
    { title: 'Addresses', url: '/addresses', icon: 'location', active: false },
    {
      title: 'Change Password',
      url: '/change-password',
      icon: 'key',
      active: false,
    },
    {
      title: 'About Us',
      url: '/about',
      icon: 'information-circle',
      active: false,
    },
    {
      title: 'Privacy Policy',
      url: '/privacy',
      icon: 'document-lock',
      active: false,
    },
    { title: 'Sign Out', icon: 'log-out', route: true, active: false },
  ];

  constructor() {
    this.addAllIcons();
  }

  addAllIcons() {
    addIcons({
      star,
      bagHandleOutline,
      bagHandle,
      bagHandleSharp,
      trashOutline,
      add,
      remove,
      arrowBackOutline,
      ticketOutline,
      locationOutline,
      homeOutline,
      homeSharp,
      informationCircleOutline,
      informationCircleSharp,
      documentLockOutline,
      documentLockSharp,
      logOutOutline,
      logOutSharp,
      personOutline,
      personSharp,
      locationSharp,
      keyOutline,
      keySharp,
    });
  }

  onItemTap(page: any) {
    if(!page?.active) {
      const index = this.pages.findIndex(x => x.active);
      this.pages[index].active = false;
      page.active = true;
    }

    if(page?.route) {
      // navigate
    } else {
      this.logout();
    }
  }

  logout() {}
}
