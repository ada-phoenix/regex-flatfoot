//CORRECT.JS UPDATER FUNCTION
export function correctUpdater(level, levelstage, clusterId) {
  level++
  levelstage = 1
  return {level, levelstage, clusterId}
}

//INCORRECT.JS UPDATER FUNCTION
export function incorrectUpdater(level, levelstage, clusterId) {
  if (levelstage < 3) {
    levelstage++
  } else {
    levelstage = 1
  }
  return {level, levelstage, clusterId}
}

//POSTBOSS.JS DEATH UPDATER FUNCTION
export function deathUpdater(level, levelstage, clusterId) {
  return {level, levelstage, clusterId}
}

//POSTBOSS.JS CONTINUE UPDATER FUNCTION
export function clusterUpdater(level, levelstage, clusterId) {
  level = 1
  levelstage = 1
  clusterId++
  return {level, levelstage, clusterId}
}

export function updateCasefile(casefile, clue) {
  const updatedCasefile = casefile
  if (!casefile.includes(clue)) {
    updatedCasefile.push(clue)
  }
  return updatedCasefile
}

export default {
  correctUpdater,
  incorrectUpdater,
  deathUpdater,
  clusterUpdater,
  updateCasefile
}
