# ng-mask
Fields formatting mask in angularJs

<p>
  <img src="https://img.shields.io/badge/ng--mask-release-green.svg">
  <img src="https://img.shields.io/badge/version-1.0.1-blue.svg">
  <img src="https://img.shields.io/bower/v/bootstrap.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
</p>

This module allows a dynamic formatting is included in a screen element.
To do this simply include the module in its AngularJs application and set policies on the html element.

```
<input type="text" class="form-control input-small" data-ng-model="zipcode" placeholder="Enter the zip code" data-ng-mask="#####-###" data-on="keyup">
```

* "data-ng-mask" defines the shape of the mask should be compulsory
* "data-on" defines which event the formatting should happen, and can be in the keyup, click etc ...

## Bower install de dependency
```
$ bower install ng-mask --save
```
