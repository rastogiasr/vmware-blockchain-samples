/*
 * Copyright 2019 VMware, all rights reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, OnInit } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { Order } from '../../core/order/order';
import { OrderService } from '../../core/order/order.service';

@Component({
  selector: 'vmw-sc-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Order[];
  orderService: OrderService;
  total: number = 10 + Math.floor(Math.random() * 100);
  loading = true;

  constructor( orderService: OrderService ) {
    this.orderService = orderService;
  }

  ngOnInit() {
    this.orderService.newOrder.subscribe(newOrder => {
      this.orders.unshift(newOrder);
    });
  }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    const fetchCount = Math.min(state.page.size, (this.total - state.page.from));
    setTimeout(() => {
      this.orders = this.orderService.generateRandomOrders(fetchCount);
      this.loading = false;
    }, 700);
  }
}
