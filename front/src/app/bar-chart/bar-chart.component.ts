import { Component, OnInit } from '@angular/core';
import * as angular from "angular";

import Chart from 'chart.js/auto';

import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public chart: any;
  public identity;
  public ventas;
  public datev : any;
  public countsales : any;

  constructor(
    private _userService : UserService,
    private _ventaService : VentaService,
    private _router : Router,
   
  ) { 
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(): void {
    this.createChart();

    // if(this.identity){
    //   //USUARIO AUTENTICADO
    //   this._ventaService.get_ventas().subscribe(
    //     response=>{
    //       this.ventas = response.ventas;
    //       console.log(this.ventas);
          
    //     },
    //     error=>{

    //     }
    //   );
    // }else{
    //   this._router.navigate(['']);
    // }
  }

  createChart(){



    if(this.identity){
      //USUARIO AUTENTICADO
      this._ventaService.get_ventas().subscribe(
        response=>{
          this.ventas = response.ventas;
          for(let item of this.ventas){
            console.log("fecha",item.fecha)
          this.datev = item.fecha
          
          }
          console.log(this.ventas);

          this.countsales = Object.keys(this._ventaService).length
          console.log("contador", this.countsales)

          this.chart = new Chart("MyChart", {

      
            type: 'bar', //this denotes tha type of chart
      
      
            data: {// values on X-Axis
              labels: [this.datev], 
               datasets: [
                {
                  label: "Sales",
                  data: [this.countsales],
                  backgroundColor: 'blue'
                },
                {
                  label: "Profit",
                  data: [],
                  backgroundColor: 'limegreen'
                }  
              ]
            },
            options: {
              aspectRatio:1.5
            }
            
          });
          
        },
        error=>{

        }
      );
    }else{
      this._router.navigate(['']);
    }
  



  }

}
