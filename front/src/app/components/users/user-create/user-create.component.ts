import { Component, OnInit } from '@angular/core';
import { User } from "../../../models/User";
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  public user;
  public success_message;
  public identity;
  public error_message;

  constructor(
    private _userService : UserService,
    private _router : Router,
  ) {
    this.user = new User('','','','','');
    this.identity = this._userService.getIdentity();
   }

  ngOnInit() {
    if(this.identity.role == 'ADMIN'){

    }else{
      this._router.navigate(['dashboard']);
    }
  }

  close_alert(){
    this.error_message = '';
  }
  success_alert(){
    this.success_message = '';
  }

  
  onSubmit(userForm){
    console.log("test",userForm.valid)
    if(userForm.valid){
      this._userService.registrar({
        password: userForm.value.password,
        nombres: userForm.value.nombres,
        email: userForm.value.email,
        role: userForm.value.role,

      }).subscribe(
        response=>{
          this.user = new User('','','','','');
          this.success_message = 'El usuario se registro con exito';
          console.log(response);
          
        },
        error=>{
          console.log(<any>error);
          
        }
      ); 
    }
    this.error_message = 'Complete todos los campos'; 
  }

}
