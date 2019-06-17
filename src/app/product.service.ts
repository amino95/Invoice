import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: '01', name: 'Samsung S10', price: 500, description: 'The large, notch-free display is a visual treat on the eyes.', availableNumber: 5 },
            { id: '02', name: 'IPhone X', price: 650, description: 'The longest battery life ever in an iPhone.', availableNumber: 15},
            { id: '03', name: 'Huawei P30', price: 450, description: 'Brighter, wider and closer. See the world from new perspectives.', availableNumber: 8},
            { id: '04', name: 'Nokia 4.2', price: 400, description: 'Beautiful craftmanship, even for the everyday.', availableNumber: 10},
            { id: '05', name: 'Oppo F11 Pro', price: 380, description: 'Oppo F11 Pro has been launched at Rs 24,990 in two colour variants: Aurora Green and Thunder Black.', availableNumber: 3}

        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    
    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}