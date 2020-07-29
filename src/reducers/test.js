const actionType = 'TEST_MEMBER'

const actionCreator = data => {return {type :actionType, data}} //action을 return한다.
const action = {actionCreator}
function reducer(state, action) {
    return null;
}
