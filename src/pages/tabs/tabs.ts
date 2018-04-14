import { ConfiguracoesPage } from './../configuracoes/configuracoes';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { SobrePage } from '../sobre/sobre';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PerfilPage;
  tab3Root = ConfiguracoesPage;
  tab4Root = FeedPage;
  tab5Root = SobrePage;


  constructor() {

  }
}
