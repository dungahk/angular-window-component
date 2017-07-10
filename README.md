# Angular Window Component

[![Build Status](https://travis-ci.org/dungahk/angular-window-component.svg?branch=master)](https://travis-ci.org/dungahk/angular-window-component)
[![npm version](https://badge.fury.io/js/angular-window-component.svg)](https://badge.fury.io/js/angular-window-component)
[![dependencies Status](https://david-dm.org/dungahk/angular-window-component/status.svg)](https://david-dm.org/dungahk/angular-window-component)
[![devDependencies Status](https://david-dm.org/dungahk/angular-window-component/dev-status.svg)](https://david-dm.org/dungahk/angular-window-component?type=dev)


Angular Window provides a basic window component for your application. I know it's not used in web projects, but if you ever come to need this, it's here.

## Installation

To install this library, run:

```bash
$ npm install angular-window-component --save
```

## Using window component

Once you have installed it, you can import it in any Angular application by running:


```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { WcWindowModule } from 'angular-window-component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify it as an import
    WcWindowModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components and directives in your Angular application:

```xml
<!-- You can now use window component in app.component.html -->
<wc-window>
  <wc-window-title>Window Title</wc-window-title>
  <wc-window-content>
    <!-- You can put anything you want here -->
    <h1>
      {{title}}
    </h1>
  </wc-window-content>
</wc-window>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Emerson Jair](mailto:emersonjairr@gmail.com)
