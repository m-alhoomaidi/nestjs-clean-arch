import { InvalidCategoryDataException } from '../exceptions/category.exception';

export class CategorySlug {
  private constructor(private readonly value: string) {
    this.validate();
  }

  static create(value: string): CategorySlug {
    return new CategorySlug(value);
  }

  private validate(): void {
    if (!this.value || this.value.trim().length === 0) {
      throw new InvalidCategoryDataException('Slug cannot be empty');
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(this.value)) {
      throw new InvalidCategoryDataException('Invalid slug format');
    }
  }

  getValue(): string {
    return this.value;
  }
}
