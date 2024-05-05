import { ToastModule } from "primeng/toast";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CpfPipe } from "./pipes/cpf-pipe.pipe";
import { ToastService } from "../services/toastr/toast.service";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";

const exportedModules = [
    CommonModule,
    ToastModule,
    ButtonModule
];

const exportedPipes = [CpfPipe];

@NgModule({
    imports: [
        ButtonModule,
        CommonModule,
        ToastModule,
    ],
    declarations: [...exportedPipes],
    providers: [ToastService, MessageService],
    exports: [...exportedModules, ...exportedPipes],
})
export class SharedModule { }
