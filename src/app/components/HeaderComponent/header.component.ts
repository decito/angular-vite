import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  template: `
    <section class="border-b border-b-gray-300 bg-slate-900">
      <nav class="mx-auto flex max-w-[1440px] justify-between gap-4 py-4 px-5">
        <div class="flex items-center gap-10">
          <h2>
            <a routerLink="/">{{ title }}</a>
          </h2>

          <ul class="flex gap-3">
            <li>
              <a
                routerLink="/accounts"
                class="router-link"
                routerLinkActive="router-link-active">
                Accounts
              </a>
            </li>

            <li>
              <a
                routerLink="/assignments"
                class="router-link"
                routerLinkActive="router-link-active">
                Assignments
              </a>
            </li>

            <li>
              <a
                routerLink="/users"
                class="router-link"
                routerLinkActive="router-link-active">
                Users
              </a>
            </li>

            <li>
              <a
                routerLink="/servers"
                class="router-link"
                routerLinkActive="router-link-active">
                Servers
              </a>
            </li>
          </ul>
        </div>

        <div class="flex gap-4"></div>
      </nav>
    </section>
  `
})
export class HeaderComponent {
  title = 'Angular Next'

  //   constructor(private authService: AuthService) {}

  //   login() {
  //     this.authService.logIn()
  //   }

  //   logout() {
  //     this.authService.logOut()
  //   }

  // isLoggedIn() {
  //   return this.authService.isAuthenticated()
  // }
}
