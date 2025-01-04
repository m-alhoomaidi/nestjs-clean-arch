export class CategoryDescription {
  private constructor(
    private readonly descriptionEn: string,
    private readonly descriptionAr: string,
  ) {
    this.validate();
  }

  static create(
    descriptionEn: string,
    descriptionAr: string,
  ): CategoryDescription {
    return new CategoryDescription(descriptionEn, descriptionAr);
  }

  private validate(): void {
    if (this.descriptionEn && this.descriptionEn.length > 500) {
      throw new Error(
        'English description cannot be longer than 500 characters',
      );
    }
    if (this.descriptionAr && this.descriptionAr.length > 500) {
      throw new Error(
        'Arabic description cannot be longer than 500 characters',
      );
    }
  }

  getDescriptionEn(): string {
    return this.descriptionEn;
  }

  getDescriptionAr(): string {
    return this.descriptionAr;
  }
}
