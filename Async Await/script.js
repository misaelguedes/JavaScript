let page = 1

const getPost = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    const data = await res.json()
    console.log(data)
}

getPost()