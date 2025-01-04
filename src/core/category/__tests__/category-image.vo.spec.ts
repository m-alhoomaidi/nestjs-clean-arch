import { InvalidCategoryDataException } from '../exceptions/category.exception';
import { CategoryImage } from '../value-objects/category-image.vo';

describe('CategoryImage', () => {
  it('should create a valid CategoryImage', () => {
    const categoryImage = CategoryImage.create('http://example.com/image.jpg');
    expect(categoryImage.getUrl()).toBe('http://example.com/image.jpg');
  });

  it('should throw an error if URL is empty', () => {
    expect(() => CategoryImage.create('')).toThrow(
      InvalidCategoryDataException,
    );
  });

  it('should throw an error if URL is invalid', () => {
    expect(() => CategoryImage.create('invalid-url')).toThrow(
      InvalidCategoryDataException,
    );
  });
});
