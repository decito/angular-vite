import '@angular/compiler'
import 'zone.js'

import './style.css'

import { bootstrapApplication } from '@angular/platform-browser'

import { AppComponent } from '~/app.component'
import { appRouting } from '~/routes/app.routing'

bootstrapApplication(AppComponent, { providers: [...appRouting] })
