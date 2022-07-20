import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feature } from '../feature';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.css']
})
export class AddFeatureComponent implements OnInit {

  feature: Feature = new Feature();
  constructor(private featureService: FeatureService,
    private router: Router) { }
    public msg="Service Added successfully"

  ngOnInit(): void {
  }

  saveFeature(){
    this.featureService.createFeature(this.feature).subscribe( data =>{
      console.log(data);
      alert(this.msg)
      this.gotoFeatureList();
    },
    error => console.log(error));
  }

  gotoFeatureList(){
    this.router.navigate(['hostel-detail/feature-available']);
  }
  
  onSubmit(){
    console.log(this.feature);
    this.saveFeature();
  }

}
