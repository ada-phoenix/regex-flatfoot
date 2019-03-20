import axios from 'axios'

// INITIAL STATE
const defaultCluster = {}

// ACTION TYPES
const GOT_CLUSTER = 'GOT_CLUSTER'

// ACTION CREATORS
const gotCluster = cluster => ({
  type: GOT_CLUSTER,
  cluster
})

// THUNK CREATORS
export const getCluster = clusterId => async dispatch => {
  const {data} = await axios.get(`/api/clusters/${clusterId}`)
  dispatch(gotCluster(data))
}

// REDUCER
export default function(state = defaultCluster, action) {
  switch (action.type) {
    case GOT_CLUSTER: {
      return action.cluster
    }
    default:
      return state
  }
}
