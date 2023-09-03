/*
describe('O artefato que queremos testar ', () => {
  it('Primeira condição que queremos testar ', () => {});
});

should - deve
when - quando
expect(true).toBeTrue() - só funciona com valores primitivos ( se instanciar o objeto )
expect(true).toBe() - Ele faz comparações como se fosse toEquals do java (cuidado! Pois eles apontam em valores diferentes em memoria) use uma variavel para comparar
expect(null).toBeTruthy - Mais simples e genérico segue as regras do js
*/

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDS when called mutiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return number of generateIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw  whe called with empty`, () => {
    const emptyValue = [null, undefined, '', '1', '0'];
    emptyValue.forEach((emptyValue) => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext('Empty Value: ' + emptyValue)
        .toThrow();
    });
  });
});
