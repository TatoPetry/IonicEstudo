
import { Injectable } from '@angular/core';

let config_key_name = "config";

@Injectable()
export class ConfigProvider {
  
  constructor() {
    
  }

  getLocalhostData(): any{
    return localStorage.getItem(config_key_name);

  }
  setLocalhostData(showSlide: boolean, name: string, username: string){
  let config = {
    showSlide: false,
    name: "",
    username: ""
  }
  if(showSlide){
    config.showSlide = showSlide;
  }
  if(name){
    config.name = name;
  }
  if(username){
    config.username = name;

    localStorage.setItem(config_key_name, JSON.stringify(config));
  }

  }

}
