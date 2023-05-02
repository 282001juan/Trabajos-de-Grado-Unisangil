import { TestBed } from '@angular/core/testing';

import { sampleWithRequiredData, sampleWithNewData } from '../modality.test-samples';

import { ModalityFormService } from './modality-form.service';

describe('Modality Form Service', () => {
  let service: ModalityFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalityFormService);
  });

  describe('Service methods', () => {
    describe('createModalityFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createModalityFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            name: expect.any(Object),
            description: expect.any(Object),
            document: expect.any(Object),
          })
        );
      });

      it('passing IModality should create a new form with FormGroup', () => {
        const formGroup = service.createModalityFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            name: expect.any(Object),
            description: expect.any(Object),
            document: expect.any(Object),
          })
        );
      });
    });

    describe('getModality', () => {
      it('should return NewModality for default Modality initial value', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const formGroup = service.createModalityFormGroup(sampleWithNewData);

        const modality = service.getModality(formGroup) as any;

        expect(modality).toMatchObject(sampleWithNewData);
      });

      it('should return NewModality for empty Modality initial value', () => {
        const formGroup = service.createModalityFormGroup();

        const modality = service.getModality(formGroup) as any;

        expect(modality).toMatchObject({});
      });

      it('should return IModality', () => {
        const formGroup = service.createModalityFormGroup(sampleWithRequiredData);

        const modality = service.getModality(formGroup) as any;

        expect(modality).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing IModality should not enable id FormControl', () => {
        const formGroup = service.createModalityFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewModality should disable id FormControl', () => {
        const formGroup = service.createModalityFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});
