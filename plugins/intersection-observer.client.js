const condition = 'IntersectionObserver' in window &&
'IntersectionObserverEntry' in window &&
'intersectionRatio' in window.IntersectionObserverEntry.prototype

if (!condition) {
  require('intersection-observer')
}
