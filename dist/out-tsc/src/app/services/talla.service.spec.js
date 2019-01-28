import { TestBed, inject } from '@angular/core/testing';
import { TallaService } from './talla.service';
describe('TallaService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [TallaService]
        });
    });
    it('should be created', inject([TallaService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=talla.service.spec.js.map