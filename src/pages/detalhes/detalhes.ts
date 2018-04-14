import { MoovieProvider } from './../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
  providers: [
    MoovieProvider
  ]
})
export class DetalhesPage {
  public filme;
  public filmeid;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public MoovieProvider: MoovieProvider
  ) {
  }

  ionViewDidLoad() {
    this.filmeid = this.navParams.get("id");
    this.MoovieProvider.getReview(this.filmeid).subscribe(data =>{
    this.filme = data;
    },error => {console.error(error);
  }
    
  );
    console.log(this.filme);  
     
    }
    
    
  }


