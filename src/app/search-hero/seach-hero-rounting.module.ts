import { RouterModule, Routes } from "@angular/router";
import { HeroSearchComponent } from "./components/hero-search";
import { NgModule } from "@angular/core";

export const HeroRoutes: Routes = [
  {
      path: 'hero',
      component: HeroSearchComponent,
      children: [{ path: '', component: HeroSearchComponent }]
  }
]

@NgModule({
  imports: [RouterModule.forChild(HeroRoutes)],
  exports: [RouterModule]
})

export class HeroRoutingModule {
}
