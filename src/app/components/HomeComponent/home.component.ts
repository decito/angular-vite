import { ChangeDetectionStrategy, Component } from '@angular/core'

import { ButtonComponent } from '../ButtonComponent/button.component'

import type { Variant } from '~/types'
@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  imports: [ButtonComponent],
  template: `<app-button [variant]="variant" (click)="onClick()"
    >Home</app-button
  >`
})
export class HomeComponent {
  flag = false
  variant: Variant = 'primary'

  onClick(): void {
    this.flag ? (this.variant = 'primary') : (this.variant = 'warning')

    this.flag = !this.flag
  }
}
