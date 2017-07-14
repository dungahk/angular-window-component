<a name="0.2.0"></a>
# 0.1.3 ([58525b](https://github.com/dungahk/angular-window-component/commit/58525b)) (2017-07-14)


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
