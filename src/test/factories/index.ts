import { Breed } from '../../types/Breed'

type Factory<T> = () => {
  create: (args?: Partial<T>) => Partial<T>
}

function createFactoryList<T>(
  factory: Factory<T>,
  count: number,
  args?: Partial<T>
) {
  return Array.from(Array(count).keys()).map(() => factory().create(args))
}

export { createFactoryList }
