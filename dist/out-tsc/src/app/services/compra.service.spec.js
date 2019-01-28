import { TestBed, inject } from '@angular/core/testing';
import { CompraService } from './compra.service';
describe('CompraService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [CompraService]
        });
    });
    it('should be created', inject([CompraService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=compra.service.spec.js.map