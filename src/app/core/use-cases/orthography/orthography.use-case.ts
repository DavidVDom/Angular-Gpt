// type porque sólo queremos importarlo como un tipo
import type { OrthographyResponse } from '@interfaces/orthography.response';
import { environment } from 'environments/environment.development';

export const orthographyUseCase = async (prompt: string) => {
  try {
    // los casos de uso queremos hacerlos portables a otros frameworks, por lo tanto serán puro ts,
    // sin dependencias de angular, de ahí que usemos la api fetch
    const resp = await fetch(`${environment.backendApi}/orthography-check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!resp.ok) throw new Error('No se pudo realizar la corrección');

    const data = (await resp.json()) as OrthographyResponse;

    return {
      ok: true,
      ...data,
    };
  } catch (error) {
    console.log(error);
    // aquí se podría usar el tipo OrthographyResponse, pero de momento no
    return {
      ok: false,
      userScore: 0,
      errors: [],
      message: 'No se pudo realizar la corrección',
    };
  }
};
