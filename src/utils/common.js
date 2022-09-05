
/**
 * 支持控制 resolve 时机的 promise，类似 angularjs 的 $q
 *
 * @returns resolve 控制器
 */
export function $defer() {
  let deferred = {
    resolve: undefined,
    reject: undefined,
    promise: undefined
  }

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  })

  return deferred;
}
