import { Route, provideRouter } from '@angular/router'

import { HomePage } from '~/pages/HomePage/home.component'
import { AboutPage } from '~/pages/AboutPage/about.component'
const routes: Route[] = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'about',
    component: AboutPage
  }
]
export const appRouting = [provideRouter(routes)]
