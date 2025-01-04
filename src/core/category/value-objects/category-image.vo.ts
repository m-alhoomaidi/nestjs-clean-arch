import { InvalidCategoryDataException } from '../exceptions/category.exception';

export class CategoryImage {
  private constructor(private readonly url: string) {
    this.validate();
  }

  static create(url: string): CategoryImage {
    return new CategoryImage(url);
  }

  private validate(): void {
    if (!this.url || this.url.trim().length === 0) {
      throw new InvalidCategoryDataException('Image URL cannot be empty');
    }

    try {
      new URL(this.url);
    } catch {
      throw new InvalidCategoryDataException('Invalid image URL');
    }
  }

  getUrl(): string {
    return this.url;
  }
}
