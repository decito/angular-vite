import { ChangeDetectionStrategy, Component } from '@angular/core'

import { ButtonComponent } from '../../components/ButtonComponent/button.component'

import type { Variant } from '~/types'
@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  imports: [ButtonComponent],
  template: `<app-button
    class="flex w-60 mx-auto"
    size="full"
    [variant]="variant"
    (click)="onClick()"
    [disabled]="true">
    Home
  </app-button>`
})
export class HomePage {
  flag = false
  variant: Variant = 'primary'

  onClick(): void {
    this.flag ? (this.variant = 'primary') : (this.variant = 'warning')

    this.flag = !this.flag
  }
}
