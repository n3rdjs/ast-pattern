function mergeDeep(dst, src) {
	for (let attr in src) {
		if (typeof src[attr] === 'object') {
			dst[attr] = {};
        	mergeDeep(dst[attr], src[attr]);
        }
		dst[attr] = src[attr];
	}
	return dst;
}