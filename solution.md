---
Title: Covergo2022
Technical choices:
  - Vue2
  - TypeScript
  - TailwindCSS
---


---
Component:
  - HomeView
  - FormView
  - SummaryView
  - ErrorView
---

---
Unit Test:
  - error.spec.ts
  - summary.spec.ts
---

```bash
covergo2022
└── components
   └──ErrorView.vue
   └──FormView.vue
   └──SummaryView.vue
└──Views
   └── HomeView.vue
  App.vue
└──tests
  └──unit
     └──error.spec.ts
     └──form.spec.ts
     └──home.spec.ts
     └──summary.spec.ts       

```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint