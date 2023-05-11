import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'

import { HeaderComponent } from './components/HeaderComponent/header.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HeaderComponent],
  template: `
    <main>
      <app-header></app-header>
      <section class="mx-auto max-w-screen-xl px-4 py-8">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
