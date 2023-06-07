import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { KnitListComponent } from "./knit-list/knit-list.component";

const routes: Routes = [

    {path:"knits", component: KnitListComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], 
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}