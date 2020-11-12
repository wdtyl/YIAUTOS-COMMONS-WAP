export const filterBrand = (data: object, vm: any): void => {
  if (!!vm.brandFilter && vm.brandFilter.length > 0) {
    const brandObj = {};
    Object.keys(data).forEach(key => {
      const filterResult = data[key].filter(brandItem => {
        return vm.brandFilter.includes(brandItem.name);
      });
      if (!!filterResult && filterResult.length > 0) {
        brandObj[key] = filterResult;
      }
    });
    vm.brandObj = brandObj;
  } else {
    vm.brandObj = data;
  }
};

export const filterFirms = (data: Array<any>, vm: any): Array<any> => {
  if (!!vm.firmsFilter && vm.firmsFilter.length > 0) {
    const filteredResult = data.filter(firms => {
      return vm.firmsFilter.includes(firms.name);
    });
    return filteredResult;
  }
  return data;
};

export const filterSeries = (data: Array<any>, vm: any): Array<any> => {
  if (!!vm.seriesFilter && vm.seriesFilter.length > 0) {
    const filteredResult = data.filter(series => {
      return vm.seriesFilter.includes(series.name);
    });
    return filteredResult;
  }
  return data;
};

export const filterModel = (data: Array<any>, vm: any): Array<any> => {
  if (!!vm.modelFilter && vm.modelFilter.length > 0) {
    let filteredResult = [];

    for (let item of data) {
      vm.modelFilterComp[item.name.replace(/\s+/g, '')] && filteredResult.push(item);
    }
    return filteredResult;
  }
  return data;
};
