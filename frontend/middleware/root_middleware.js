import { applyMiddleware } from 'redux';
import TimezoneMiddleware from './app_middleware';

const RootMiddleware = applyMiddleware(
  TimezoneMiddleware
);

export default RootMiddleware;
