/*
describe('O artefato que queremos testar ', () => {
  it('Primeira condição que queremos testar ', () => {});
});

should - deve
when - quando
*/

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });
});
