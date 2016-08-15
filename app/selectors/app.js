import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
  notifications: (state) => state.notifications,
  products: (state) => state.products
});
