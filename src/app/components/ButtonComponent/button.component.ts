import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit
} from '@angular/core'
import { CommonModule } from '@angular/common'

import { Variant } from '~/types'

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-button',
  imports: [CommonModule],
  template: `<button [type]="type" [class]="classes" [disabled]="disabled">
    <ng-content></ng-content>

    <i *ngIf="icon" [class]="'fas fa-' + icon"></i>
  </button>`
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() variant?: Variant = 'primary'
  @Input() size?: 'sm' | 'lg' | 'full' | 'default' = 'default'
  @Input() type?: 'button' | 'submit' | 'reset' = 'button'

  @Input() outlined? = false
  @Input() disabled? = false

  @Input() icon? = ''

  classes: string = ''

  ngOnInit(): void {
    this.classes = `${this.size} ${this.variant}`

    if (this.outlined) this.classes += ` outlined`

    if (this.disabled) this.classes += ` disabled`
  }

  ngOnChanges(): void {
    this.ngOnInit()
  }
}
