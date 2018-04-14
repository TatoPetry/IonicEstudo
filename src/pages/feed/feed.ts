import { DetalhesPage } from './../detalhes/detalhes';
import { MoovieProvider } from './../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';





@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public loading;
  public refresher;
  public isrefresher = false;
  public lista_filmes = new Array<any>();
  public res: any = [];
  public page = 1;
  public infiniteScroll;
   
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private moovieProvider: MoovieProvider,
    public loadingCtrl: LoadingController 
  ) {
  }
  
  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.takeMovies(true);  
   
  }



  openDetalhes(filme){
    this.navCtrl.push(DetalhesPage, {id: filme.id});
    
    console.log(filme);
  }

  openLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
    this.loading.present();
    setTimeout(() => {
      this.loading.dismiss();
    }, 5000);

  }
  closeLoading() {
    this.loading.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isrefresher = true;
    
    this.takeMovies();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }



  

  ionViewDidEnter() {
    this.takeMovies();        
  }

  takeMovies(newpage: boolean = false){
    this.openLoading();
    this.moovieProvider.getTopRated(this.page).subscribe(data =>{
    this.res = data;
    
       if(newpage){
        this.lista_filmes = this.lista_filmes.concat(this.res.results);
        this.closeLoading;
        this.infiniteScroll.complete();
      
       } else {
        this.lista_filmes = this.res.results;
        this.closeLoading;
    }
    
    
      console.log(this.lista_filmes);
      if(this.isrefresher){
        this.refresher.complete();
      }

    }, error =>{
      this.closeLoading;
      console.log(error);
      if(this.isrefresher){
        this.refresher.complete();
      }
    }
    )

  }

  
}
