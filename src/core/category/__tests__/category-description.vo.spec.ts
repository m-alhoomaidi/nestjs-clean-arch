import { CategoryDescription } from '../value-objects/category-description.vo';
import { InvalidCategoryDataException } from '../exceptions/category.exception';

describe('CategoryDescription', () => {
  it('should create a valid CategoryDescription', () => {
    const categoryDescription = CategoryDescription.create(
      'Description in English',
      'وصف باللغة العربية',
    );
    expect(categoryDescription.getDescriptionEn()).toBe(
      'Description in English',
    );
    expect(categoryDescription.getDescriptionAr()).toBe('وصف باللغة العربية');
  });

  it('should not throw an error if descriptions are empty', () => {
    expect(() => CategoryDescription.create('', '')).not.toThrow();
  });

  it('should throw an error if descriptions exceed 500 characters', () => {
    const longDescription = 'A'.repeat(501);
    expect(() =>
      CategoryDescription.create(longDescription, longDescription),
    ).toThrow(InvalidCategoryDataException);
  });
});
