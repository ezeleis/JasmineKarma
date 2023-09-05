import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteComponent } from './componente.component';

describe('ComponenteComponent', () => {
  let component: ComponenteComponent;
  let fixture: ComponentFixture<ComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deve adicionar ao início do array quando chamado', () => {
    const itemToAdd = 'Novo Item';
    const result = component.addItemToBeginning(itemToAdd);

    // Verifique se o resultado é a mesma referência do array em component
    expect(result).toBe(component.myArray);

    // Verifique se o item foi adicionado no início do array
    expect(result[0]).toBe(itemToAdd);
  });
});