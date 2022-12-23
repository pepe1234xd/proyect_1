import {NgModule} from '@angular/core';
import { contadorComponent } from './contador/contador.components';

@NgModule({
    declarations:[
        contadorComponent,
    ],
    exports:[
        contadorComponent
    ]
})

export class contadorModule{}