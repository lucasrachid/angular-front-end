import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { ToastService } from "../../services/toastr/toast.service";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [SharedModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

    constructor(
        private toastService: ToastService,
    ) {}

    batata(): void {
        console.log("zzzzz");
        this.toastService.success("Sucesso", "XPTO");
    }
}
