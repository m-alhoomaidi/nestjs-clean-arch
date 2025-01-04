export class CategoryNotFoundException extends Error {
  constructor(id: number) {
    super(`Category with id ${id} not found`);
    this.name = 'CategoryNotFoundException';
  }
}

export class CategoryAlreadyExistsException extends Error {
  constructor(nameEn: string) {
    super(`Category with English name ${nameEn} already exists`);
    this.name = 'CategoryAlreadyExistsException';
  }
}

export class InvalidCategoryDataException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidCategoryDataException';
  }
}
