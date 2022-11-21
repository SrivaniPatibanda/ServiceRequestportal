
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { AuthgaurdService } from "../Services/authgaurd.service";

export const Mainroutes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register',component: RegisterComponent  },
    { path: 'customer',canActivate:[AuthgaurdService], loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule) },
   
    
];
