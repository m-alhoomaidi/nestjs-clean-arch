export class CategoryDomainException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CategoryDomainException';
  }
}

export class InvalidCategoryDataException extends CategoryDomainException {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidCategoryDataException';
  }
}

export class CategoryNotFoundException extends CategoryDomainException {
  constructor(id: number) {
    super(`Category with id ${id} not found`);
    this.name = 'CategoryNotFoundException';
  }
}

export class CategoryAlreadyExistsException extends CategoryDomainException {
  constructor(nameEn: string) {
    super(`Category with English name ${nameEn} already exists`);
    this.name = 'CategoryAlreadyExistsException';
  }
}
