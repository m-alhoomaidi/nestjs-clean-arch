import { Category } from '../entities/category.entity';
import { CategoryName } from '../value-objects/category-name.vo';
import { CategoryDescription } from '../value-objects/category-description.vo';
import { CategoryImage } from '../value-objects/category-image.vo';

describe('Category', () => {
  let category: Category;

  beforeEach(() => {
    const name = CategoryName.create('Electronics', 'إلكترونيات');
    const description = CategoryDescription.create(
      'Description in English',
      'وصف باللغة العربية',
    );
    const image = CategoryImage.create('http://example.com/image.jpg');

    category = Category.create(1, name, description, image);
  });

  it('should create a valid Category', () => {
    expect(category.getId()).toBe(1);
    expect(category.getName().getNameEn()).toBe('Electronics');
    expect(category.getSlug().getValue()).toBe('electronics');
  });

  it('should update the Category', () => {
    const newName = CategoryName.create('Home Appliances', 'الأجهزة المنزلية');
    const newDescription = CategoryDescription.create(
      'New description',
      'وصف جديد',
    );
    const newImage = CategoryImage.create('http://example.com/new-image.jpg');

    category.update(newName, newDescription, newImage);

    expect(category.getName().getNameEn()).toBe('Home Appliances');
    expect(category.getSlug().getValue()).toBe('home-appliances');
  });
});
