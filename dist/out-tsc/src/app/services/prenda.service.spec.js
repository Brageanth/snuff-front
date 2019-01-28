import { TestBed, inject } from '@angular/core/testing';
import { PrendaService } from './prenda.service';
describe('PrendaService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PrendaService]
        });
    });
    it('should be created', inject([PrendaService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=prenda.service.spec.js.map