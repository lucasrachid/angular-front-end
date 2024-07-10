import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { ToastService } from './services/toastr/toast.service';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, SharedModule, ToastModule],
    providers: [ToastService, MessageService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
}
