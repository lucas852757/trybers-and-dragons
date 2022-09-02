/* source: https://app.betrybe.com/course/back-end/typescript/tipagem-estatica-e-generics/68eccf60-a982-4455-837d-da31e8726be5/conteudos/92d81f61-aeb5-4bb6-af7f-ee4563c35254/type-aliases/cc6523bb-7253-4b0c-a1a4-4bf4e976f7f3?use_case=side_bar */

import { EnergyType } from './TypeEnergyType';

interface Energy {
  type_: EnergyType,
  amount: number,  
}
export { EnergyType };
export default Energy;