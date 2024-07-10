import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CpfPipe } from "./pipes/cpf-pipe.pipe";
import { ButtonModule } from "primeng/button";

const exportedModules = [
    CommonModule,
    ButtonModule
];

const exportedPipes = [CpfPipe];

@NgModule({
    imports: [
        ButtonModule,
        CommonModule,
    ],
    declarations: [...exportedPipes],
    providers: [],
    exports: [...exportedModules, ...exportedPipes],
})
export class SharedModule { }
