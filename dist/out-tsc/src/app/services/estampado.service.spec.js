import { TestBed, inject } from '@angular/core/testing';
import { EstampadoService } from './estampado.service';
describe('EstampadoService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [EstampadoService]
        });
    });
    it('should be created', inject([EstampadoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=estampado.service.spec.js.map