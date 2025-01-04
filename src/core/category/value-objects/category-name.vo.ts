export class CategoryName {
  private constructor(
    private readonly nameEn: string,
    private readonly nameAr: string,
  ) {
    this.validate();
  }

  static create(nameEn: string, nameAr: string): CategoryName {
    return new CategoryName(nameEn, nameAr);
  }

  private validate(): void {
    if (!this.nameEn || this.nameEn.trim().length === 0) {
      throw new Error('English name cannot be empty');
    }
    if (!this.nameAr || this.nameAr.trim().length === 0) {
      throw new Error('Arabic name cannot be empty');
    }
    if (this.nameEn.length > 50) {
      throw new Error('English name cannot be longer than 50 characters');
    }
    if (this.nameAr.length > 50) {
      throw new Error('Arabic name cannot be longer than 50 characters');
    }
  }

  getNameEn(): string {
    return this.nameEn;
  }

  getNameAr(): string {
    return this.nameAr;
  }
}
