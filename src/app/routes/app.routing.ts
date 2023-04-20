import { Route, provideRouter } from "@angular/router";

import { HomeComponent } from "~/components/HomeComponent/home.component";
import { AboutComponent } from "~/components/AboutComponent/about.component";
const routes: Route[] = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
];
export const appRouting = [provideRouter(routes)];
