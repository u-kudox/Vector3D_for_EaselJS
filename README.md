# Vector3D for EaselJS

Vector3D for EaselJS adds AS3 like Vector3D class to EaselJS.

## Example
	var v1 = new createjs.Vector3D(10, 10, 10);
	var v2 = new createjs.Vector3D(-5, -5, -5);
	v1.normalize();
	v2.normalize();
	var dotProduct = v1.dotProduct(v2);
	console.log(dotProduct); // -1


## Properties
* length [getter]
* lengthSquared [getter]
* w
* x
* y
* z


## Methods
* add
* angleBetween [static]
* clone
* copyFrom
* crossProduct
* decrementBy
* distance [static]
* dotProduct
* equals
* incrementBy
* nearEquals
* negate
* normalize
* project
* scaleBy
* setTo
* subtract
* toString


## Resources
* More information and samples at the [kudox.jp](http://kudox.jp/java-script/createjs-easeljs-vector3d)
* Read the [AS3 API Documentation](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/geom/Vector3D.html), because API is similar to AS3.


## Contact and bug reports
* [kudox.jp](http://kudox.jp/contact)
* [Twitter](http://twitter.com/u_kudox)


## License
public domain