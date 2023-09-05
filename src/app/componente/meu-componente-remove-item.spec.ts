import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteComponent} from "./componente.component";

describe('MeuComponenteComponent - Remover Item', () => {
  let fixture: ComponentFixture<ComponenteComponent>;
  let component: ComponenteComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteComponent]
    });

    fixture = TestBed.createComponent(ComponenteComponent);
    component = fixture.componentInstance;
  });

  it('deve diminuir o tamanho do array ao remover um item', () => {
    // Adicione um item ao array
    const itemToAdd = 'Item de Teste';
    component.addItemToBeginning(itemToAdd);

    // Registre o tamanho inicial do array
    const initialArrayLength = component.myArray.length;

    // Remova o item do array
    component.removeItem(itemToAdd);

    // Verifique se o tamanho do array diminuiu
    expect(component.myArray.length).toBeLessThan(initialArrayLength);
  });
});
