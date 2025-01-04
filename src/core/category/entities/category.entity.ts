import { CategoryName } from '../value-objects/category-name.vo';
import { CategoryDescription } from '../value-objects/category-description.vo';
import { CategoryImage } from '../value-objects/category-image.vo';
import { InvalidCategoryDataException } from '../exceptions/category.exception';
import { CategorySlug } from '../value-objects/category-slug.vo';
import { SlugGeneratorService } from '../services/slug-generator.service';

export class Category {
  private static readonly slugGenerator = new SlugGeneratorService();

  private constructor(
    private readonly id: number,
    private name: CategoryName,
    private description: CategoryDescription,
    private image: CategoryImage,
    private slug: CategorySlug,
    private readonly createdAt: Date,
    private updatedAt: Date,
    private isActive: boolean = true,
  ) {
    this.validate();
  }

  static create(
    id: number,
    name: CategoryName,
    description: CategoryDescription,
    image: CategoryImage,
  ): Category {
    const generatedSlug = this.slugGenerator.generate(name.getNameEn());
    const slug = CategorySlug.create(generatedSlug);

    return new Category(
      id,
      name,
      description,
      image,
      slug,
      new Date(),
      new Date(),
      true,
    );
  }

  private validate(): void {
    if (!this.slug || this.slug.getValue().trim().length === 0) {
      throw new InvalidCategoryDataException('Slug cannot be empty');
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(this.slug.getValue())) {
      throw new InvalidCategoryDataException('Invalid slug format');
    }
  }

  getId(): number {
    return this.id;
  }

  getName(): CategoryName {
    return this.name;
  }

  getDescription(): CategoryDescription {
    return this.description;
  }

  getImage(): CategoryImage {
    return this.image;
  }

  getSlug(): CategorySlug {
    return this.slug;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  update(
    name: CategoryName,
    description: CategoryDescription,
    image: CategoryImage,
  ): void {
    if (name.getNameEn() !== this.name.getNameEn()) {
      const newSlug = Category.slugGenerator.generate(name.getNameEn());
      this.slug = CategorySlug.create(newSlug);
    }

    this.name = name;
    this.description = description;
    this.image = image;
    this.updatedAt = new Date();
  }

  deactivate(): void {
    this.isActive = false;
    this.updatedAt = new Date();
  }

  activate(): void {
    this.isActive = true;
    this.updatedAt = new Date();
  }

  isActiveCategory(): boolean {
    return this.isActive;
  }

  toJSON() {
    return {
      id: this.id,
      nameEn: this.name.getNameEn(),
      nameAr: this.name.getNameAr(),
      descriptionEn: this.description.getDescriptionEn(),
      descriptionAr: this.description.getDescriptionAr(),
      image: this.image.getUrl(),
      slug: this.slug,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  equals(other: Category): boolean {
    if (!(other instanceof Category)) {
      return false;
    }
    return this.id === other.id;
  }
}
