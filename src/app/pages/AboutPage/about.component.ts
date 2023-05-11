import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-about',
  imports: [CommonModule],
  template: `<p>hello, this is about us page</p>`
})
export class AboutPage {}
