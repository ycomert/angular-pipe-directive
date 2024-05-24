import { Pipe, PipeTransform } from '@angular/core';

const translations: any = {
  en: { 'hello': 'Hello', 'world': 'World' },
  es: { 'hello': 'Hola', 'world': 'Mundo' },
  fr: { 'hello': 'Bonjour', 'world': 'Monde' }
};

@Pipe({
  name: 'translate',
  standalone: true // kendi oluşturduğumuz pipe larda burayı eklemek gerekiyor.
})
export class TranslatePipe implements PipeTransform {

  transform(value: string, lang: string = 'fr'): string {
    return translations[lang][value] || value;
  }

}
