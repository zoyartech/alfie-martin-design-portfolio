import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { createPageUrl } from '@/utils';

const markdownContent = `
# Design System — Developer Handoff

This is the implementation spec for engineers building against the Wexley design system. It pairs with the design system documentation but goes deeper on tokens, component APIs, accessibility requirements, and conventions.

If you only read one section, read **Token Architecture**. Everything else assumes you understand it.

---

## Stack assumptions

I built the playground in React with Tailwind. The system is portable, but the reference implementation uses:

- **Framework:** React 18+
- **Styling:** Tailwind CSS with CSS custom properties for runtime theming
- **Component primitives:** Radix UI for accessibility-critical components (Dialog, Popover, Combobox, Slider, Switch, Tabs)
- **Icons:** Lucide React
- **Type system:** TypeScript

If you are porting to another stack (Vue, Svelte, web components), the token layer below is framework-agnostic. The component contracts in this document are not, but they translate cleanly.

---

## Token architecture

The system uses a two-layer token model.

**Layer 1: Primitive tokens.** Raw values. Color hex codes, pixel measurements, durations. These are not consumed directly by components.

**Layer 2: Semantic tokens.** Named by role, not appearance. Components reference these. When the theme changes, semantic tokens point to different primitive tokens, and components re-render automatically.

All tokens are exposed as CSS custom properties on \`:root\`. Tailwind classes reference them via the config.

### Primitive tokens

\`\`\`css
:root {
  /* Color primitives */
  --slate-50:  #f8fafc;
  --slate-100: #f1f5f9;
  --slate-200: #e2e8f0;
  --slate-300: #cbd5e1;
  --slate-400: #94a3b8;
  --slate-500: #64748b;
  --slate-600: #475569;
  --slate-700: #334155;
  --slate-800: #1e293b;
  --slate-900: #0f172a;
  --slate-950: #020617;

  --red-500: #ef4444;
  --red-600: #dc2626;
  --green-500: #10b981;
  --amber-500: #f59e0b;
  --blue-500: #3b82f6;
  --blue-600: #2563eb;

  /* Spacing primitives (4-point scale) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;

  /* Radius primitives */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Motion primitives */
  --duration-fast: 100ms;
  --duration-base: 200ms;
  --duration-slow: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-decelerate: cubic-bezier(0, 0, 0.2, 1);
  --ease-accelerate: cubic-bezier(0.4, 0, 1, 1);
}
\`\`\`

### Semantic tokens

\`\`\`css
:root {
  /* Color: surface */
  --color-surface-default: var(--slate-50);
  --color-surface-raised:  #ffffff;
  --color-surface-sunken:  var(--slate-100);
  --color-surface-inverse: var(--slate-900);

  /* Color: text */
  --color-text-primary:   var(--slate-900);
  --color-text-secondary: var(--slate-600);
  --color-text-tertiary:  var(--slate-400);
  --color-text-inverse:   var(--slate-50);
  --color-text-link:      var(--blue-600);

  /* Color: border */
  --color-border-default: var(--slate-200);
  --color-border-strong:  var(--slate-300);
  --color-border-subtle:  var(--slate-100);
  --color-border-focus:   var(--blue-500);

  /* Color: action */
  --color-action-primary:        var(--slate-900);
  --color-action-primary-hover:  var(--slate-800);
  --color-action-secondary:      var(--slate-100);
  --color-action-destructive:    var(--red-500);
  --color-action-destructive-hover: var(--red-600);

  /* Color: status */
  --color-status-success: var(--green-500);
  --color-status-warning: var(--amber-500);
  --color-status-danger:  var(--red-500);
  --color-status-info:    var(--blue-500);

  /* Typography */
  --font-family-sans: system-ui, -apple-system, sans-serif;
  --font-family-mono: ui-monospace, "SF Mono", monospace;
  --font-size-base:   16px;
  --line-height-tight:   1.2;
  --line-height-normal:  1.5;
  --line-height-relaxed: 1.7;

  /* Layout */
  --border-radius-base: 6px;
  --spacing-multiplier: 1;
  --shadow-intensity:   1;
  --motion-speed:       0.2s;
}
\`\`\`

### Theme override pattern

Themes are CSS class overrides applied to a parent element. The Theme Editor in the playground writes overrides to a \`data-theme\` attribute on \`<body>\`:

\`\`\`css
[data-theme="custom"] {
  --color-action-primary: /* user-chosen primary */;
  --color-surface-sunken: /* user-chosen secondary base */;
  --border-radius-base:   /* user-chosen radius */;
  /* etc. */
}
\`\`\`

Engineers should never write hex codes inside components. Always reference semantic tokens.

---

## Component API conventions

Every component in the system follows the same five conventions.

### 1. Prop naming

- **Variant** for visual style (\`variant="default" | "secondary" | "outline" | "ghost" | "link" | "destructive"\`)
- **Size** for sizing (\`size="sm" | "md" | "lg"\`)
- **State props** for interactive state (\`disabled\`, \`loading\`, \`selected\`, \`expanded\`)
- **Slot props** for composition (\`leadingIcon\`, \`trailingIcon\`, \`helperText\`, \`errorMessage\`)
- **Event handlers** prefixed with \`on\` (\`onClick\`, \`onChange\`, \`onValueChange\`)

I do not use boolean variant props (\`isPrimary\`, \`isSecondary\`). One \`variant\` prop with a union type.

### 2. Composition over configuration

When a component has more than four meaningful slots, it becomes composable instead of configurable. Compare:

\`\`\`tsx
// Wrong: a card with 12 props
<Card
  title="..."
  subtitle="..."
  imageUrl="..."
  badge="..."
  badgeVariant="..."
  primaryAction="..."
  secondaryAction="..."
  // ...
/>

// Right: composable
<Card>
  <Card.Header>
    <Card.Title>Project Alpha</Card.Title>
    <Badge>Active</Badge>
  </Card.Header>
  <Card.Body>...</Card.Body>
  <Card.Footer>
    <Button>View Details</Button>
  </Card.Footer>
</Card>
\`\`\`

The cards in the playground (Project Alpha, Create New Asset) use this pattern.

### 3. Controlled and uncontrolled

Every input component supports both modes. Uncontrolled is the default with \`defaultValue\`. Controlled requires both \`value\` and \`onChange\`.

### 4. Polymorphism via \`as\`

Buttons, links, and surface components accept an \`as\` prop to render a different element:

\`\`\`tsx
<Button as="a" href="/dashboard">Go to Dashboard</Button>
\`\`\`

The visual treatment stays the same. The semantics change. This is how I handle the button-versus-link distinction: a "Link" variant button renders an \`<a>\` by default, but any variant can be made a link via \`as\`.

### 5. Forwarding refs and props

Every component forwards refs. Every component spreads unrecognized props onto the root element. This is non-negotiable for accessibility tooling and third-party integration.

---

## Component specs

Each spec lists props, states, accessibility requirements, and any non-obvious behavior.

### Button

\`\`\`ts
interface ButtonProps {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  as?: ElementType;
  // plus all native button props
}
\`\`\`

**Sizes:** sm = 32px height, md = 40px, lg = 48px. Horizontal padding scales: sm = 12px, md = 16px, lg = 20px.

**Loading state:** Replace the leading icon slot with a spinner. Keep the button width fixed. Set \`aria-busy="true"\`. Do not change the label text.

**Disabled:** Use \`aria-disabled\` (not the \`disabled\` attribute) so screen readers can still discover the button. Capture and prevent click events when \`aria-disabled\` is true.

**Accessibility:**
- Min touch target 44x44px regardless of visual size (use invisible padding or \`::before\` on icon-only buttons)
- Focus ring: 2px solid \`--color-border-focus\`, 2px offset
- Icon-only buttons require \`aria-label\`

### Icon Button

\`\`\`ts
interface IconButtonProps extends Omit<ButtonProps, 'leadingIcon' | 'trailingIcon'> {
  icon: ReactNode;
  'aria-label': string; // required
}
\`\`\`

Always required \`aria-label\`. The type system enforces it.

### Floating Action Button

\`\`\`ts
interface FABProps {
  icon: ReactNode;
  'aria-label': string;
  position?: 'bottom-right' | 'bottom-left';
  variant?: 'primary' | 'secondary';
}
\`\`\`

56px circular. Always fixed-position. Uses the blue accent token, not primary. Respects safe-area insets on iOS.

### Button Group / Segmented Control

\`\`\`ts
interface ButtonGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  options: Array<{ value: string; label: string; icon?: ReactNode }>;
  size?: 'sm' | 'md' | 'lg';
}
\`\`\`

**Accessibility:** Wrap in a \`role="radiogroup"\`. Each option is \`role="radio"\`. Arrow keys move selection. Space or Enter activates.

### Input (text, password, search, number)

\`\`\`ts
interface InputProps {
  type?: 'text' | 'password' | 'search' | 'email' | 'number' | 'tel' | 'url';
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  trailingAction?: ReactNode; // for password reveal, clear button, etc.
  size?: 'sm' | 'md' | 'lg';
  // plus all native input props
}
\`\`\`

**States:** default, focus, filled, error, disabled, read-only.

**Error state:** Three signals required. Border color shifts to danger. Icon appears in trailing slot. Error message renders below in \`--color-status-danger\`. Never color alone.

**Accessibility:**
- Label is always associated via \`htmlFor\`. Visually hidden labels still get rendered for screen readers.
- Helper text and error messages use \`aria-describedby\`
- Error state sets \`aria-invalid="true"\`
- Password reveal toggle is a separate button inside the input, not a checkbox

### Textarea

Same props as Input but renders a \`<textarea>\`. Adds \`rows\` and \`autoResize\`. When \`autoResize\` is true, height grows with content up to a \`maxRows\` cap, then scrolls.

### Select / Dropdown

Built on Radix Select. Use the wrapper for token application:

\`\`\`ts
interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  errorMessage?: string;
}
\`\`\`

For lists over 7 items, use Combobox instead.

### Combobox / Autocomplete

Built on Radix Combobox primitives or Downshift. Supports filtering, async loading, multi-select.

**Async data:** Debounce the filter callback at 200ms. Show a loading indicator inside the popover, not on the trigger.

**Keyboard:** Arrow keys navigate, Enter selects, Escape closes, type-ahead jumps to matching option.

### Checkbox

\`\`\`ts
interface CheckboxProps {
  checked?: boolean | 'indeterminate';
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}
\`\`\`

Supports indeterminate state for tree selection and bulk-select patterns.

### Radio Group

\`\`\`ts
interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  options: Array<{ value: string; label: string; description?: string }>;
  orientation?: 'horizontal' | 'vertical';
}
\`\`\`

### Switch / Toggle

\`\`\`ts
interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}
\`\`\`

Switches are for immediate-effect state changes. They never appear inside a form with a Submit button. If the change is reversible and instant (Notifications on/off, Airplane Mode), use Switch. Otherwise use Checkbox.

### Slider / Range Slider

\`\`\`ts
interface SliderProps {
  value?: number | [number, number];
  defaultValue?: number | [number, number];
  onValueChange?: (value: number | [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  marks?: Array<{ value: number; label?: string }>;
}
\`\`\`

Passing a tuple turns it into a range slider with two thumbs.

### Date Picker

Built on a calendar primitive (react-day-picker recommended). Supports single date, date range, and date+time. Accepts \`min\`, \`max\`, and \`disabledDates\` for constraint.

### OTP / Pin Input

\`\`\`ts
interface OTPInputProps {
  length: number;
  value?: string;
  onChange?: (value: string) => void;
  separator?: ReactNode; // renders between segments
  type?: 'numeric' | 'alphanumeric';
  autoFocus?: boolean;
}
\`\`\`

The playground example uses \`length={6}\` with a separator at index 3.

### File Uploader

\`\`\`ts
interface FileUploaderProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in bytes
  onFilesAdded: (files: File[]) => void;
  onError?: (error: { code: string; message: string }) => void;
}
\`\`\`

Supports click and drag-and-drop. Drag state is communicated visually (border color shift) and via \`aria-dropeffect\`.

### Color Picker

Composed of a swatch button and a popover with the picker UI. The hex input below the swatch is bidirectional.

### Tags / Chips Input

\`\`\`ts
interface TagsInputProps {
  value: string[];
  onValueChange: (value: string[]) => void;
  placeholder?: string;
  maxTags?: number;
  validate?: (tag: string) => boolean | string;
}
\`\`\`

Enter adds a tag. Backspace on empty input deletes the last tag. Each tag has a remove button with \`aria-label="Remove [tag name]"\`.

### Card

\`\`\`ts
interface CardProps {
  variant?: 'default' | 'interactive' | 'bordered' | 'elevated';
  as?: ElementType;
}

// Subcomponents
Card.Header, Card.Title, Card.Description, Card.Body, Card.Footer, Card.Image
\`\`\`

**Interactive variant:** Whole card is the hit target. Renders as \`<button>\` or \`<a>\` (via \`as\`). Nested interactive elements are forbidden by the contract; the linter should catch this.

### Modal / Dialog

Built on Radix Dialog.

\`\`\`ts
interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  size?: 'sm' | 'md' | 'lg' | 'fullscreen';
  // subcomponents: Modal.Header, Modal.Title, Modal.Description, Modal.Body, Modal.Footer
}
\`\`\`

**Behavior:**
- Focus traps to within the modal
- Returns focus to the trigger on close
- Closes on Escape unless \`disableEscapeClose\`
- Closes on outside click unless \`disableOutsideClickClose\`
- Body scroll is locked while open

The first focusable element receives focus on open, not the close button. The close button is the *last* element in the DOM order so it is not the first tab stop.

### Drawer / Sheet

Same API as Modal, with an additional \`side\` prop (\`'left' | 'right' | 'top' | 'bottom'\`). Same focus behavior.

### Popover

Built on Radix Popover.

\`\`\`ts
interface PopoverProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  // subcomponents: Popover.Trigger, Popover.Content
}
\`\`\`

Use for non-interrupting content that is too rich for a tooltip. If the content has any focusable element, use Popover, not Tooltip.

### Toast / Snackbar

Built on Radix Toast or sonner.

\`\`\`ts
interface ToastOptions {
  title: string;
  description?: string;
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  duration?: number; // ms, default per variant
  action?: { label: string; onClick: () => void };
}

// Imperative API
toast.success({ title: 'Saved' });
toast.error({ title: 'Failed to save', description: '...' });
\`\`\`

**Defaults:**
- success: 5000ms
- warning: 8000ms
- destructive: persists until dismissed

Toasts render in a region with \`role="status"\` for success/info, \`role="alert"\` for warnings/errors.

### Alert / Banner

\`\`\`ts
interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'destructive';
  title?: string;
  description?: string;
  icon?: ReactNode; // defaults per variant
  onDismiss?: () => void;
}
\`\`\`

The "Heads up!" and "Error" examples in the playground use this component.

### Progress Bar

\`\`\`ts
interface ProgressProps {
  value?: number; // 0-100, undefined = indeterminate
  max?: number;
  size?: 'sm' | 'md';
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  label?: string;
}
\`\`\`

Always uses \`role="progressbar"\` with \`aria-valuenow\`, \`aria-valuemin\`, \`aria-valuemax\`.

### Skeleton

\`\`\`ts
interface SkeletonProps {
  variant?: 'rect' | 'circle' | 'text';
  width?: string | number;
  height?: string | number;
  count?: number;
}
\`\`\`

Animated shimmer. Respects \`prefers-reduced-motion\` and falls back to a static gray block.

### Spinner

\`\`\`ts
interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'inverse';
  label?: string; // for screen readers
}
\`\`\`

Default \`label="Loading"\` if not provided. Renders inside \`role="status"\` with \`aria-live="polite"\`.

### Stat Tile

\`\`\`ts
interface StatTileProps {
  label: string;
  value: string | number;
  delta?: { value: string; direction: 'up' | 'down' | 'neutral'; period: string };
  icon?: ReactNode;
}
\`\`\`

The Total Revenue / Subscriptions / Active Now tiles in the playground use this.

### Chart wrappers

I do not write chart primitives from scratch. The system wraps Recharts (or similar) with:

- Pre-configured token-aware colors
- A unified \`<Chart.Tooltip />\` component matching the popover style
- A unified empty state and loading state

Each chart type (Bar, Line, Area, Donut) has its own wrapper component with a normalized data prop:

\`\`\`ts
interface ChartProps {
  data: Array<Record<string, number | string>>;
  xKey: string;
  yKeys: string[];
  colors?: string[]; // semantic tokens, not hex
  height?: number;
  loading?: boolean;
  emptyState?: ReactNode;
}
\`\`\`

---

## Accessibility checklist

This is a hard requirement, not a polish pass. Every PR must pass:

- [ ] All interactive elements are keyboard-reachable
- [ ] Tab order is logical and follows reading order
- [ ] Focus rings are visible on all focusable elements
- [ ] Touch targets are 44x44px minimum
- [ ] Color contrast hits 4.5:1 for body text, 3:1 for UI and large text
- [ ] No information communicated by color alone
- [ ] All form fields have associated labels
- [ ] All images have alt text or \`role="presentation"\`
- [ ] All icon-only buttons have \`aria-label\`
- [ ] All custom widgets follow the matching WAI-ARIA pattern
- [ ] Components work with screen readers (test with VoiceOver or NVDA)
- [ ] Components respect \`prefers-reduced-motion\`
- [ ] Components work without JavaScript where reasonably possible (forms, links)

The CI pipeline runs \`axe-core\` against every component story. Violations block merge.

---

## Browser and device support

- **Browsers:** Last 2 versions of Chrome, Firefox, Safari, Edge. Safari on iOS 15+. Chrome on Android 11+.
- **Viewports:** 320px minimum width. 1920px reference desktop width. Tested at 360, 768, 1024, 1280, 1440, 1920.
- **Pointer:** Mouse, touch, and keyboard equally supported. Pen and hybrid devices follow the touch model.

---

## File structure

\`\`\`
src/
├── tokens/
│   ├── primitives.css      # raw values
│   ├── semantic.css        # role-based aliases
│   └── themes/             # theme overrides
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   ├── Input/
│   └── ...
├── hooks/
├── utils/
└── index.ts                # public API surface
\`\`\`

Every component lives in its own folder with co-located tests and stories. The root \`index.ts\` controls the public API. Anything not exported from \`index.ts\` is internal and subject to change without notice.

---

## Testing expectations

Each component requires:

1. **Unit tests** for prop variants, controlled/uncontrolled behavior, and event handling
2. **Accessibility tests** via \`jest-axe\`
3. **Visual regression tests** via Chromatic or Percy against the Storybook stories
4. **Keyboard interaction tests** for any focus-managing component (Modal, Dropdown, Tabs)

Stories cover every variant, every size, and the three required states: default, hover (via Storybook controls), focus.

---

## Versioning and releases

Semver.

- **Major:** breaking changes to component APIs, removed exports, renamed tokens
- **Minor:** new components, new tokens, new variants, new props with defaults
- **Patch:** bug fixes, internal refactors, visual refinements that do not change behavior

Deprecations get a one-version warning before removal. The console warns on use of any deprecated API, with a link to the migration guide.

Changelogs use Changesets. Every PR that touches the public API requires a changeset.

---

## How to contribute

If you are adding a component, follow this order:

1. Open an issue describing the use case. Reference at least two real product surfaces that would use it.
2. Get a token review. New tokens are reviewed before any component work begins.
3. Build the component with full state coverage, accessibility specs, and tests.
4. Write the Storybook stories first. The story file is the visual spec.
5. Open the PR with a changeset.
6. Pair with me for the design review.

If you are modifying an existing component, the bar is lower but the same accessibility and test requirements apply.

---

## Open questions for engineering

These are things I want input on, not directives:

1. **Animation library.** Tailwind transitions handle most cases. Framer Motion or React Spring for the more complex sequences (modal entrance, drawer slide, list reordering)?
2. **Form library.** React Hook Form is my default. Confirm or push back.
3. **Theme runtime.** The Theme Editor writes CSS custom properties at runtime. Confirm this is acceptable in your server-rendering setup, or propose an alternative (CSS-in-JS, build-time generation).
4. **Icon delivery.** Lucide is the default. If bundle size becomes a concern, we can switch to an icon-as-component approach with tree-shaking.

---

## Contact

For design questions: me, Alfie. Slack or email works.
For escalations: open an issue with the \`design-system\` label.

*Last updated: [DATE]. Document version: 0.1.*
`;

export default function DeveloperHandoff() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-16 px-6 lg:px-12 border-b border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <Link to={createPageUrl("DesignSystemPlayground")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Playground
          </Link>
          <h1 className="text-4xl font-light text-slate-900 tracking-tight">Developer Handoff</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <article className="prose prose-slate prose-lg max-w-none prose-headings:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-pre:bg-slate-900 prose-pre:text-slate-50">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}