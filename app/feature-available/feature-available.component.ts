import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feature } from '../feature';

import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-feature-available',
  templateUrl: './feature-available.component.html',
  styleUrls: ['./feature-available.component.css']
})
export class FeatureAvailableComponent implements OnInit {
  feature:Feature[]=[];
  public msg='data deleted successfully'

  constructor(private featureservice:FeatureService,private router:Router) { }

  ngOnInit(): void {
    this.getFeatures();
    
  }
  
  deleteFeature(id: number){
    this.featureservice.deleteFeature(id).subscribe( data => {
      
      console.log('deleted response',data);
      alert(this.msg)
      this.getFeatures();
    })
  }

  private getFeatures(){
    this.featureservice.getFeatureList().subscribe(data => {
      this.feature = data
    })
  }

}
