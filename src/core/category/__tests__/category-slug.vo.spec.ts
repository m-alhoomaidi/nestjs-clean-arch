import { CategorySlug } from '../value-objects/category-slug.vo';
import { InvalidCategoryDataException } from '../exceptions/category.exception';

describe('CategorySlug', () => {
  it('should create a valid CategorySlug', () => {
    const categorySlug = CategorySlug.create('electronics-products');
    expect(categorySlug.getValue()).toBe('electronics-products');
  });

  it('should throw an error if slug is empty', () => {
    expect(() => CategorySlug.create('')).toThrow(InvalidCategoryDataException);
  });

  it('should throw an error if slug format is invalid', () => {
    expect(() => CategorySlug.create('Invalid Slug!')).toThrow(
      InvalidCategoryDataException,
    );
  });
});
