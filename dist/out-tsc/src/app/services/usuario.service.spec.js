import { TestBed, inject } from '@angular/core/testing';
import { UsuarioService } from './usuario.service';
describe('UsuarioService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [UsuarioService]
        });
    });
    it('should be created', inject([UsuarioService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=usuario.service.spec.js.map