import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero';


export const HeroRoutes: Routes = [
    {
        path: 'hero',
        component: HeroComponent,
        children: [{ path: '', component: HeroComponent }]
    }
]

@NgModule({
    imports: [RouterModule.forChild(HeroRoutes)],
    exports: [RouterModule]
})

export class HeroRoutingModule {
}
