import { PrintOptions } from './../../../node_modules/.staging/@ionic-native/printer-5336a59a/index.d';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Flashlight } from '@ionic-native/flashlight';

import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Badge } from '@ionic-native/badge';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Brightness } from '@ionic-native/brightness';
import { CallNumber } from '@ionic-native/call-number';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Clipboard } from '@ionic-native/clipboard';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';
import { Network } from '@ionic-native/network';
import { Printer, PrintOptions } from '@ionic-native/printer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  networkData: string = 'No network data';
  acceleration: string = "No acceleration data";
  orientation: string = "No orientation data";
  batteryLevel: string = "No batterylevel yet found";
  callNumberResult: string = "No call placed yet";
  base64Image: string = "data:image/gif;base64,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";

  debugInfo: string = "No debug info";

  constructor(public navCtrl: NavController,
    private platform: Platform,
    private flashlight: Flashlight,
    private androidFullScreen: AndroidFullScreen,
    private badge: Badge,
    private batteryStatus: BatteryStatus,
    private brightness: Brightness,
    private callNumber: CallNumber,
    private camera: Camera,
    private clipboard: Clipboard,
    private contacts: Contacts,
    private deviceMotion: DeviceMotion,
    private deviceOrientation: DeviceOrientation,
    private network: Network,
    private printer: Printer,
  ) { }

  ionViewWillEnter() {
    this.platform.ready().then(() => {

      this.batteryLevel = "No batterylevel yet found, platform ready";

      // leaking the subscription
      this.batteryStatus.onChange().subscribe(status => {
        console.log(status.level, status.isPlugged);
        this.batteryLevel = JSON.stringify(status, null, 2);
      });

      // Get the device current acceleration
      this.deviceMotion.getCurrentAcceleration().then(
        (acceleration: DeviceMotionAccelerationData) => {
          console.log(acceleration);
          this.acceleration = JSON.stringify(acceleration, null, 2);

          this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
            console.log(acceleration);
            this.acceleration = JSON.stringify(acceleration, null, 2)
          });

        })
        .catch((error: any) => {
          console.log(error);
          this.acceleration = "ERROR acceleration " + error
        });


      this.deviceOrientation.getCurrentHeading()
        .then((data: DeviceOrientationCompassHeading) => {
          console.log(data)
          this.orientation = JSON.stringify(data, null, 2);

          this.deviceOrientation.watchHeading().subscribe(
            (data: DeviceOrientationCompassHeading) => {
              console.log(data);
              this.orientation = JSON.stringify(data, null, 2);
            }
          );
        })
        .catch((error: any) => {
          console.log(error);
          this.orientation = 'Orientation error ' + JSON.stringify(error, null, 2);
        })


      this.networkData = "Network connected " + this.network.type + ' ' + this.network.downlinkMax;

      this.network.onDisconnect().subscribe(() => {
        console.log('network was disconnected :-(');
        this.networkData = "Disconnected";
      });

      this.network.onConnect().subscribe(() => {
        console.log('network connected!');
        // We just got a connection but we need to wait briefly
        // before we determine the connection type. Might need to wait.
        // prior to doing any api requests as well.
        setTimeout(() => {
          this.networkData = "Network connected " + this.network.type + ' ' + this.network.downlinkMax;
        }, 3000);
      });

    })
  }

  toggleFlashlight() {
    this.flashlight.toggle();
  }

  toggleLeanMode() {
    this.androidFullScreen.leanMode();
  }

  resetBadge() {
    this.badge.clear();
  }

  setBadge() {
    this.badge.set(10);
  }

  setBrightnessLow() {
    this.brightness.setBrightness(0.1);
  }

  setBrightnessHigh() {
    this.brightness.setBrightness(0.8);
  }

  doCallNumber() {
    this.callNumber.callNumber("18001010101", true)
      .then(res => {
        console.log('Launched dialer!', res);
        this.callNumberResult = JSON.stringify(res, null, 2)
      })
      .catch(res => {
        console.log('Dialer error!', res);
        this.callNumberResult = JSON.stringify(res, null, 2)
      })
  }

  doCameraAction() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log('ERROR using camera ', err);
      this.debugInfo = JSON.stringify(err, null, 2);
    });
  }

  doClipboard() {
    this.clipboard.copy('Hello world');

    this.clipboard.paste().then(
      (resolve: string) => {
        alert(resolve);
      },
      (reject: string) => {
        alert('Error: ' + reject);
      }
    );
  }

  addContact() {

    let contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, 'Smith', 'John');
    contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    contact.save().then(
      () => { console.log('Contact saved!', contact); alert('Contact created'); },
      (error: any) => { console.error('Error saving contact.', error); alert('Contact error ' + JSON.stringify(error, null, 2)); }
    );
  }


  doPrintAction() {
    let options: PrintOptions = {
      name: 'MyDocument',
      duplex: true,
      landscape: true,
      grayscale: true
    };

    this.printer.print('Hello world!', PrintOptions );
  }
}
