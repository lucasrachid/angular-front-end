import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from './services/toastr/toast.service';
import { SharedModule } from './shared/shared.module';
import { ButtonModule } from 'primeng/button';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, SharedModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
}
