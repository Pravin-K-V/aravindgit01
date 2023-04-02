// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { RouterTestingModule } from '@angular/router/testing';
// import { of } from 'rxjs';

// import { DepositeComponent } from './deposite.component';
// import { LoginservicesService } from '../loginservices.service';

// describe('DepositeComponent', () => {
//   let component: DepositeComponent;
//   let loginServiceSpy: LoginservicesService;

//   beforeEach(() => {
//     loginServiceSpy = jasmine.createSpyObj('LoginservicesService', ['summaryview', 'deposit']);
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, MatSnackBarModule, RouterTestingModule],
//       declarations: [DepositeComponent],
//       providers: [
//         { provide: LoginservicesService, useValue: loginServiceSpy },
//       ]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     const fixture = TestBed.createComponent(DepositeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should deposit amount', () => {
//     const amount = 100;
//     const user_id = '1234';
//     loginServiceSpy.summaryview.and.returnValue(of({}));
//     loginServiceSpy.deposit.and.returnValue(user_id);
//     const putSpy = spyOn(component['http'], 'put').and.returnValue(of({}));
//     const snackOpenSpy = spyOn(component['snack'], 'open');

//     component.depositAmount = amount;
//     component.ondeposit();

//     expect(loginServiceSpy.summaryview).toHaveBeenCalled();
//     expect(loginServiceSpy.deposit).toHaveBeenCalled();
//     expect(putSpy).toHaveBeenCalledWith(`http://localhost:8000/users/${user_id}`, { amount });
//     expect(snackOpenSpy).toHaveBeenCalledWith('Deposited', 'ok');
//   });
// });
