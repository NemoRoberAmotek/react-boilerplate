import { faker } from "@faker-js/faker"
import { Breed } from "../../types/Breed"

function breedFactory() {
  return {
    create: (args?: Partial<Breed>) => {
      return {
        id: args?.id || faker.number.int().toString(),
        name: args?.name || faker.animal.dog(),
        bred_for: args?.bred_for || faker.word.noun(),
        temperament: args?.temperament || faker.word.adjective(),
        origin: args?.origin || faker.location.countryCode(),
        image: args?.image || {
          id: faker.number.int().toString(),
          width: faker.number.int(),
          height: faker.number.int(),
          url: faker.internet.url()
        }
      }
    }
  }
}

export default breedFactory