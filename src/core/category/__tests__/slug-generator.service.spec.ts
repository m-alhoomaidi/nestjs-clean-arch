import { SlugGeneratorService } from '../services/slug-generator.service';

describe('SlugGeneratorService', () => {
  let service: SlugGeneratorService;

  beforeEach(() => {
    service = new SlugGeneratorService();
  });

  it('should convert spaces to hyphens', () => {
    expect(service.generate('Digital Products')).toBe('digital-products');
  });

  it('should remove special characters', () => {
    expect(service.generate('Digital & Electronics!')).toBe(
      'digital-electronics',
    );
  });

  it('should convert to lowercase', () => {
    expect(service.generate('DIGITAL')).toBe('digital');
  });

  it('should handle multiple spaces', () => {
    expect(service.generate('Digital  Products')).toBe('digital-products');
  });

  it('should remove leading and trailing hyphens', () => {
    expect(service.generate(' Digital Products ')).toBe('digital-products');
  });
});
