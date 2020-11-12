class MemoryCache {
  private static cacheSingleton: MemoryCache;

  static getInstance(): MemoryCache {
    if (!MemoryCache.cacheSingleton) {
      MemoryCache.cacheSingleton = new MemoryCache();
    }
    return MemoryCache.cacheSingleton;
  }

  private constructor() {}

  private cacheMap: Map<string, object> = new Map<string, object>();

  public setCacheByKey(key: string, value: any): boolean {
    this.cacheMap.set(key, value);
    return true;
  }

  public getCacheByKey(key: string): any {
    return this.cacheMap.get(key);
  }
}

export default MemoryCache;
