
import '../data/initialState.json'
const userService = {
    loginService
}
function handleResponse(response) { //자바 없는 상태에서 테스트하기??
    return response.text()
        .then(text => {
            const data = text && JSON.parse(text)
            if (!response.ok){
                if (response.status ===401){
                    window.location.reload()
                }
                const error = (data && data.message) ||  //error 났을때 상황
                    response.statusText
                return Promise.reject(error)
            }
            return data // 에러가 아니라면 data를 던진다.
        })
}
function loginService(userid, password) {
    alert(` loginService 진입 `)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userid,password})
    }
    return fetch(`/initialState.json`, requestOptions)
        .then(handleResponse)
        .then(user => {
            alert(` json 읽기 성공 `)
            localStorage.setItem('user', JSON.stringify(user))

        })
}
export default userService