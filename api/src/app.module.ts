import {Module} from '@nestjs/common';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';

@Module({
	imports: [
		ProductsModule,
		CartModule
	],
})
export class AppModule {}
