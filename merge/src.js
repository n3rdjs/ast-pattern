function merge(dst, src) {
	for (let attr in src) {
    	dst[attr] = src[attr];
    }
}