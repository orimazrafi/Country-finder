let idsBalances = {};
function reduceIds(data) {
  for (let key of Object.keys(data)) {
    if (!Object.keys(data[key]).includes('addressBalance')) {
      reduceIds(data[key]);
    } else {
      if (data[key].addressBalance) {
        idsBalances = idsBalances[key]
          ? {
              ...idsBalances,
              [key]: idsBalances[key] + data[key].addressBalance,
            }
          : { ...idsBalances, [key]: data[key].addressBalance };
      }
    }
  }
  return idsBalances;
}
