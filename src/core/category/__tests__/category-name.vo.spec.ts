import { CategoryName } from '../value-objects/category-name.vo';
import { InvalidCategoryDataException } from '../exceptions/category.exception';

describe('CategoryName', () => {
  it('should create a valid CategoryName', () => {
    const categoryName = CategoryName.create('Electronics', 'إلكترونيات');
    expect(categoryName.getNameEn()).toBe('Electronics');
    expect(categoryName.getNameAr()).toBe('إلكترونيات');
  });

  it('should throw an error if English name is empty', () => {
    expect(() => CategoryName.create('', 'إلكترونيات')).toThrow(
      InvalidCategoryDataException,
    );
  });

  it('should throw an error if Arabic name is empty', () => {
    expect(() => CategoryName.create('Electronics', '')).toThrow(
      InvalidCategoryDataException,
    );
  });

  it('should throw an error if names exceed 50 characters', () => {
    const longName = 'A'.repeat(51);
    expect(() => CategoryName.create(longName, longName)).toThrow(
      InvalidCategoryDataException,
    );
  });
});
