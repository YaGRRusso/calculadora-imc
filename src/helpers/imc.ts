export type Levels = {
   title: string,
   color: string,
   icon: 'down' | 'up',
   imc: number[],
   result?: number
}

export const levels: Levels[] = [
   { title: 'magro', color: '#96a3ab', icon: 'down', imc: [0, 18.5] },
   { title: 'normal', color: '#9ead69', icon: 'up', imc: [18.6, 24.9] },
   { title: 'sobrepeso', color: '#e2b039', icon: 'down', imc: [25, 30] },
   { title: 'obesidade', color: '#c3423f', icon: 'down', imc: [30.1, 99] },
];

export const calculateImc = (altura: number, peso: number) => {
   const imc = peso / (altura * altura);

   for (let i in levels) {
      if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
         const levelCopy: Levels = { ...levels[i] }
         levelCopy.result = imc
         return levelCopy
      }
   }

   return null
}