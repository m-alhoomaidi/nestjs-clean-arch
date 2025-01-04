import { Category } from '../entities/category.entity';

export interface ICategoryRepository {
  findAll(): Promise<Category[]>;
  findById(id: number): Promise<Category | null>;
  findBySlug(slug: string): Promise<Category | null>;
  create(category: Category): Promise<Category>;
  update(category: Category): Promise<Category>;
  delete(id: number): Promise<void>;
  existsByNameEn(nameEn: string, excludeId?: number): Promise<boolean>;
  existsByNameAr(nameAr: string, excludeId?: number): Promise<boolean>;
  existsBySlug(slug: string, excludeId?: number): Promise<boolean>;
}
