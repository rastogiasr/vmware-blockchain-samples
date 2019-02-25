/*
 * Copyright 2019 VMware, all rights reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { random, randomHexString } from '../../shared/utils';

export class Order {

  id: string; // Format: 0x304a554a310C7e546dfe434669C62820b7D83490
  item: string;
  quantity: number;
  status: string;

  constructor() {
    this.id = randomHexString(30);
    this.quantity = random(10);
  }
}
