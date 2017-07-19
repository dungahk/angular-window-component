<a name="0.3.0"></a>
# 0.3.0 ([27f028](https://github.com/dungahk/angular-window-component/commit/27f028)) (2017-07-14)


### Fixes

* **header:** changed toolbar styles, using flex instead of margin. [Issue #4](https://github.com/dungahk/angular-window-component/issues/4) ([77a27cf](https://github.com/dungahk/angular-window-component/commit/77a27cf))
* **selection:** text now shouldn't be selected when dragging or resizing. [Issue #11](https://github.com/dungahk/angular-window-component/issues/11) ([5ac6d0](https://github.com/dungahk/angular-window-component/commit/5ac6d0))
* **toolbar:** buttons restore and maximize now should work as expected [Issue #9](https://github.com/dungahk/angular-window-component/issues/9) ([2df817](https://github.com/dungahk/angular-window-component/commit/2df817))
* **header:** minimizing and resizing will never hide the toolbar nor let the window with a height less than the header [Issue #6](https://github.com/dungahk/angular-window-component/issues/6) and [Issue #5](https://github.com/dungahk/angular-window-component/issues/5) ([2df817](https://github.com/dungahk/angular-window-component/commit/2df817))

### Features

* **footer:** the window now has a footer, it stays always on the bottom of the window. [Issue #7](https://github.com/dungahk/angular-window-component/issues/7) ([723b03e](https://github.com/dungahk/angular-window-component/commit/723b03e))
* **container:** query selector to specify the window container. [Issue #8](https://github.com/dungahk/angular-window-component/issues/8) ([629035a](https://github.com/dungahk/angular-window-component/commit/629035a))
* **documentation:** added compodoc generated documentation, check README for more details ([5ac6d0](https://github.com/dungahk/angular-window-component/commit/5ac6d0))
* **touch:** now supports touch events for dragging and resizing. [Issue #10](https://github.com/dungahk/angular-window-component/issues/10) ([27f028](https://github.com/dungahk/angular-window-component/commit/27f028))

<a name="0.2.2"></a>
# 0.2.2 ([da860c](https://github.com/dungahk/angular-window-component/commit/da860c8ba19d8e7b6b3355e1f75a6d9573d9cb43)) (2017-07-14)


### Fixes

* **padding:** the default header padding is now 0

<a name="0.2.1"></a>
# 0.2.1 ([da860c](https://github.com/dungahk/angular-window-component/commit/da860c8ba19d8e7b6b3355e1f75a6d9573d9cb43)) (2017-07-14)


### Fixes

* **padding:** the default content padding is now 0

<a name="0.2.0"></a>
# 0.2.0 ([da860c](https://github.com/dungahk/angular-window-component/commit/da860c8ba19d8e7b6b3355e1f75a6d9573d9cb43)) (2017-07-14)


### Fixes

* **resize corners and bars:** lot of improvements made on those, they should work really seamlessly now
* **limits:** the window now cannot go beyond the page boundaries (body of the page)
* **scroll:** now if the content doens't fit in the window, a scroll shows up

### Features

* **width:** previously called size, it sets the initial width of the window in pixels
* **height:** (new) it sets the initial height of the window in pixels
* **minWidth:** it sets the min width of the window in pixels (default: 251)
* **minHeight:** it sets the min height of the window in pixels (default: 20)

<a name="0.1.3"></a>
# 0.1.3 (2017-07-14)


### Fixes

* **classes:** change classes names to prevent conflicts ([8fc3f0](https://github.com/dungahk/angular-window-component/commit/8fc3f0))


<a name="0.1.2"></a>
# 0.1.2 (2017-07-13)


### Features

* **size:** support for the initial size of the window ([25c2f01](https://github.com/dungahk/angular-window-component/commit/25c2f01))


<a name="0.1.1"></a>
# 0.1.1 (2017-07-10)


### Features

* **resize:** the window can be resized for any sides, including corners ([cdcbce](https://github.com/dungahk/angular-window-component/commit/cdcbce))
* **move:** the window can be moved to anywhere
* **title:** the window title can be set using the directive WcWindowTitleDirective
* **content:** the window content can be set using the directive WcWindowContentDirective
