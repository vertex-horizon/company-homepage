/**
 * Charted — site-wide configuration constants.
 *
 * Lives in its own module (NOT inside ChartedApp.jsx) so that page modules
 * can import these without creating a circular dependency:
 *
 *   ChartedApp.jsx → imports → Home.jsx
 *   Home.jsx       → imports SUPPORT_EMAIL → ChartedApp.jsx (cycle!)
 *
 * If Home.jsx uses an import at module-eval time (e.g., inside `const FAQS = [...]`
 * at top level), the binding may not be initialized yet, triggering a
 * "Cannot access 'X' before initialization" TDZ error.
 *
 * Putting the constants here breaks the cycle: both files import from a
 * leaf module that has no further deps.
 */

export const APP_STORE_URL = 'https://apps.apple.com/app/id6761878521'
export const SUPPORT_EMAIL = 'contact@vertex-horizon.com'
export const PARENT_SITE = 'https://www.vertex-horizon.com'
