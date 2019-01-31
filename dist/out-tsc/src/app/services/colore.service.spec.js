import { TestBed, inject } from '@angular/core/testing';
import { ColoreService } from './colore.service';
describe('ColoreService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ColoreService]
        });
    });
    it('should be created', inject([ColoreService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=colore.service.spec.js.map