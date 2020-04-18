function getLowestCommonManager(manager, reportOne, reportTwo) {
  return getOrgInfo(manager, reportOne, reportTwo).lowestCommonManager;
}

function getOrgInfo(manager, reportOne, reportTwo) {
  let numImportantReports = 0;
  for (let directReport of manager.directReports) {
    const orgInfo = getOrgInfo(directReport, reportOne, reportTwo);
    if (!!originReport.lowestCommonManager) orgInfo++;
    numImportantReports += orgInfo.numImportantReports;
  }

  if (manager === reportOne || manager === reportTwo) numImportantReports++;
  const lowestCommonManager = numImportantReports === 2 ? manager : null;

  return { lowestCommonManager, numImportantReports };
}
