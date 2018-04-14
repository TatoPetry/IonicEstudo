import { SobrePage } from './../sobre/sobre';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
rootPage = PerfilPage;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

  openPerfil(){
    this.navCtrl.push(PerfilPage);
  }
  openSobre(){
    this.navCtrl.push(SobrePage);
  }


}
