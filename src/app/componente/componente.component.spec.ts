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
  it('deve aumentar o tamanho do array ao adicionar um item', () => {
    const itemToAdd = 'Novo Item';
    const initialArrayLength = component.myArray.length;
    const result = component.addItemToBeginning(itemToAdd);

    expect(result.length).toBeGreaterThan(initialArrayLength);
  });
  it('deve conter o item "lasanha" no array', () => {
    // Verifique se o item "lasanha" está contido no array
    expect(component.myArray).toContain('lasanha');
  });
  it('deve lançar uma exceção se o item não for encontrado', () => {
    const itemToFind = 'ItemQueNaoExiste';

    // Use uma função anônima para chamar o método e capturar a exceção
    expect(() => component.findItemIndex(itemToFind)).toThrowError('Item não encontrado no array.');
  });

});
