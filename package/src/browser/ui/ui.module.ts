import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { CalendarTableProvider } from './calendar/calendar-table';
import { DialogContainerComponent } from './dialog/dialog-container.component';
import {
    DialogActionsDirective,
    DialogCloseDirective,
    DialogContentDirective,
    DialogTitleDirective,
} from './dialog/dialog-content-directives';
import { IconComponent } from './icon/icon.component';
import { InputDirective } from './input/input.directive';
import { ResizableHandlerDirective } from './resizable/resizable-handler.directive';
import { ResizableComponent } from './resizable/resizable.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { ButtonToggleComponent, ButtonToggleGroupDirective } from './button-toggle/button-toggle.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { ErrorComponent } from './error/error.component';


const MODULES = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    PortalModule,
    A11yModule,
];


const UI_DECLARATIONS = [
    ButtonComponent,
    ButtonToggleComponent,
    ButtonToggleGroupDirective,
    ResizableComponent,
    ResizableHandlerDirective,
    DialogContainerComponent,
    DialogCloseDirective,
    DialogTitleDirective,
    DialogContentDirective,
    DialogActionsDirective,
    SpinnerComponent,
    IconComponent,
    TooltipComponent,
    TooltipDirective,
    FormFieldComponent,
    ErrorComponent,
    InputDirective,
];


@NgModule({
    imports: [
        ...MODULES,
    ],
    declarations: [
        ...UI_DECLARATIONS,
    ],
    entryComponents: [
        DialogContainerComponent,
        TooltipComponent,
    ],
    providers: [
        CalendarTableProvider,
    ],
    exports: [
        ...MODULES,
        ...UI_DECLARATIONS,
    ],
})
export class UIModule {
}