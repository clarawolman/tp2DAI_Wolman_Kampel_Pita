import { getCurrencyAbbreviation } from 'currency-map-country';
import { getCountryByAbbreviation } from 'currency-map-country';

let monedaDelPais, codigoPais;

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UK';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) 
{
   if (getCountryByAbbreviation(codigoPais)!= null) {
        return getCurrencyAbbreviation(codigoPais);
   }
   else {
        return null;
   }
}