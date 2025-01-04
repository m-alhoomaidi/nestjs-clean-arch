import { CategoryName } from '../value-objects/category-name.vo';
import { CategoryDescription } from '../value-objects/category-description.vo';
import { CategoryImage } from '../value-objects/category-image.vo';

export class Category {
  constructor(
    private readonly id: number,
    private name: CategoryName,
    private description: CategoryDescription,
    private image: CategoryImage,
    private readonly slug: string,
    private readonly createdAt: Date,
    private updatedAt: Date,
  ) {}

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

  getSlug(): string {
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
    this.name = name;
    this.description = description;
    this.image = image;
    this.updatedAt = new Date();
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
}
