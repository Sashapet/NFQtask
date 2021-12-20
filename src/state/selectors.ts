import { authSelectors } from './auth/AuthSelector';

export const selectors = {
  auth: authSelectors,
} as const;
