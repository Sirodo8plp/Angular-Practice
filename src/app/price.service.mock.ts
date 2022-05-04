import { IPriceService } from './price-service.interface';

export class MockPriceService implements IPriceService {
  calculateTotalPrice(basePrice: number, state: string): number {
    if (state === 'FL') {
      return basePrice + 0.66; //it's always 66 cents in Florida!
    }

    return basePrice;
  }
}
