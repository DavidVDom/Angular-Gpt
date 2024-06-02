import { Injectable } from '@angular/core';
import { orthographyUseCase } from '@use-cases/index';
import { from } from 'rxjs';

// se usará este servicio para llamar a casos de uso
@Injectable({ providedIn: 'root' })
export class OpenAiService {
  checkOrthography(promt: string) {
    // esto funcionaría devolviendo una promise, pero en angular usaremos mejor observable
    // return orthographyUseCase(promt);
    // aquí se podría poner un pipe, si da un error que no continúe, hacerle un switch map... De momento lo dejamos así
    return from(orthographyUseCase(promt));
  }
}
